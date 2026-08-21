import { Request, Response, NextFunction } from 'express';
import prisma from '../../../prisma/schema/prisma.clint';
import {
  generateWebSiteSchema,
  generatePersonSchema,
  generateEducationalOrganizationSchema,
  generateArticleSchema,
  extractTextFromDescription,
} from '../services/jsonLdGenerator';

const DOMAIN = process.env.SITE_DOMAIN || 'https://classmaster.top';

// RegEx to identify search engine bots and social media crawlers
const BOT_USER_AGENTS = /googlebot|bingbot|yandexbot|baiduspider|twitterbot|facebookexternalhit|rogerbot|linkedinbot|embedly|quora link preview|showyoubot|outbrain|pinterest\/0\.|pinterestbot|slackbot|vkShare|W3C_Validator|whatsapp|discordbot/i;

function escapeHtml(str: string): string {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function renderHtmlShell(params: {
  title: string;
  description: string;
  url: string;
  image?: string;
  type?: string;
  jsonLd: object;
  bodyContent?: string;
}): string {
  const { title, description, url, image, type = 'website', jsonLd, bodyContent = '' } = params;
  const safeImage = image
    ? (image.startsWith('http') ? image : `${DOMAIN}/${image}`)
    : `${DOMAIN}/assets/default-og.png`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}">
  <link rel="canonical" href="${url}" />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="${type}" />
  <meta property="og:url" content="${url}" />
  <meta property="og:title" content="${escapeHtml(title)}" />
  <meta property="og:description" content="${escapeHtml(description)}" />
  <meta property="og:image" content="${safeImage}" />
  <meta property="og:site_name" content="Classmaster" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="${url}" />
  <meta name="twitter:title" content="${escapeHtml(title)}" />
  <meta name="twitter:description" content="${escapeHtml(description)}" />
  <meta name="twitter:image" content="${safeImage}" />

  <!-- JSON-LD Structured Data -->
  <script type="application/ld+json">
${JSON.stringify(jsonLd, null, 2)}
  </script>
</head>
<body>
  <div id="seo-prerender">
    <h1>${escapeHtml(title)}</h1>
    <p>${escapeHtml(description)}</p>
    ${bodyContent}
  </div>
</body>
</html>`;
}

/**
 * Express Middleware: Intercept search crawlers and return dynamic HTML shells with SEO Meta Tags & JSON-LD
 */
export const botInterceptor = async (req: Request, res: Response, next: NextFunction) => {
  const userAgent = req.headers['user-agent'] || '';

  // If not a crawler, continue normal user execution
  if (!BOT_USER_AGENTS.test(userAgent)) {
    return next();
  }

  const urlPath = req.path;

  try {
    // 1. User Profile Route (/profile/:username)
    const profileMatch = urlPath.match(/^\/profile\/([^\/]+)/);
    if (profileMatch) {
      const username = decodeURIComponent(profileMatch[1]);
      const user = await prisma.account.findUnique({
        where: { username },
        include: { address: true },
      });

      if (user) {
        const title = `${user.name} (@${user.username}) | Classmaster`;
        const userAboutText = extractTextFromDescription(user.about);
        const description = userAboutText || `View ${user.name}'s profile and educational updates on Classmaster.`;
        const profileUrl = `${DOMAIN}/profile/${encodeURIComponent(user.username)}`;
        const jsonLd = generatePersonSchema(user);

        const html = renderHtmlShell({
          title,
          description,
          url: profileUrl,
          image: user.image || undefined,
          type: 'profile',
          jsonLd,
          bodyContent: `<p>User Account: ${escapeHtml(user.name)}</p>`
        });

        return res.status(200).set('Content-Type', 'text/html').send(html);
      }
    }

    // 2. Educational Organization / Institution Route (/institution/:name)
    const instMatch = urlPath.match(/^\/institution\/([^\/]+)/);
    if (instMatch) {
      const nameOrUsername = decodeURIComponent(instMatch[1]);
      const institution = await prisma.account.findFirst({
        where: {
          OR: [
            { username: nameOrUsername },
            { name: { equals: nameOrUsername, mode: 'insensitive' } },
          ],
          accountType: 'academy',
        },
        include: { address: true },
      });

      if (institution) {
        const title = `${institution.name} | Classmaster`;
        const instAboutText = extractTextFromDescription(institution.about);
        const description = instAboutText || `${institution.name} official academy page on Classmaster. Explore class routines, notices, and updates.`;
        const instUrl = `${DOMAIN}/institution/${encodeURIComponent(institution.username || institution.name)}`;
        const jsonLd = generateEducationalOrganizationSchema(institution);

        const html = renderHtmlShell({
          title,
          description,
          url: instUrl,
          image: institution.image || institution.coverImage || undefined,
          type: 'website',
          jsonLd,
          bodyContent: `<p>Educational Organization: ${escapeHtml(institution.name)}</p>`
        });

        return res.status(200).set('Content-Type', 'text/html').send(html);
      }
    }

    // 3. Notice Route (/notice/:id)
    const noticeMatch = urlPath.match(/^\/notice\/([^\/]+)/);
    if (noticeMatch) {
      const noticeId = noticeMatch[1];
      const notice = await prisma.notice.findUnique({
        where: { id: noticeId },
        include: { Account: true },
      });

      if (notice) {
        const title = `${notice.title} | Classmaster Notice`;
        const plainDesc = extractTextFromDescription(notice.description);
        const description = plainDesc || notice.title;
        const noticeUrl = `${DOMAIN}/notice/${notice.id}`;
        const jsonLd = generateArticleSchema(notice);

        const html = renderHtmlShell({
          title,
          description,
          url: noticeUrl,
          image: notice.Account?.image || undefined,
          type: 'article',
          jsonLd,
          bodyContent: `<article><h2>${escapeHtml(notice.title)}</h2><p>${escapeHtml(plainDesc)}</p></article>`
        });

        return res.status(200).set('Content-Type', 'text/html').send(html);
      }
    }

    // 4. Root / Homepage
    if (urlPath === '/' || urlPath === '/home') {
      const title = 'Classmaster - Educational Platform & Routine Management';
      const description = 'Classmaster connects students, teachers, and institutions with dynamic class routines, notices, and academic tools.';
      const jsonLd = generateWebSiteSchema();

      const html = renderHtmlShell({
        title,
        description,
        url: DOMAIN,
        type: 'website',
        jsonLd,
      });

      return res.status(200).set('Content-Type', 'text/html').send(html);
    }

    // Default fallback to next route handler for standard requests
    return next();
  } catch (error) {
    console.error('Error in Bot Interceptor Middleware:', error);
    return next();
  }
};

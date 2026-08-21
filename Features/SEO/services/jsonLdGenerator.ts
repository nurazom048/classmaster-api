import dotenv from 'dotenv';
dotenv.config();

const DOMAIN = process.env.SITE_DOMAIN || "https://classmaster.top";
const LOGO_URL = `${DOMAIN}/assets/logo.png`;

/**
 * 1. WebSite Schema Generator (Enables Google Sitelinks Search Box)
 */
export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Classmaster",
    "alternateName": ["Classmaster Top", "Classmaster Platform"],
    "url": DOMAIN,
    "description": "Classmaster is an all-in-one educational platform for routines, notices, and academic institution management.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${DOMAIN}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };
}

/**
 * 2. Person Schema Generator (User Profiles)
 */
export function generatePersonSchema(user: any) {
  const profileUrl = `${DOMAIN}/profile/${encodeURIComponent(user.username)}`;
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": user.name,
    "alternateName": `@${user.username}`,
    "identifier": user.username,
    "url": profileUrl,
    "description": user.about || `Profile of ${user.name} (@${user.username}) on Classmaster.`
  };

  if (user.image) {
    schema.image = user.image.startsWith("http") ? user.image : `${DOMAIN}/${user.image}`;
  }

  if (user.address) {
    const { streetAddress, upazila, district } = user.address;
    schema.address = {
      "@type": "PostalAddress",
      ...(streetAddress && { streetAddress }),
      ...(upazila && { addressLocality: upazila }),
      ...(district && { addressRegion: district }),
      "addressCountry": "BD"
    };
  }

  return schema;
}

/**
 * 3. EducationalOrganization Schema Generator (Institutions/Coaching Centers)
 */
export function generateEducationalOrganizationSchema(institution: any) {
  const instUrl = `${DOMAIN}/institution/${encodeURIComponent(institution.username || institution.name)}`;
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": institution.name,
    "url": instUrl,
    "description": institution.about || `${institution.name} - Educational organization on Classmaster.`
  };

  if (institution.image) {
    schema.logo = institution.image.startsWith("http") ? institution.image : `${DOMAIN}/${institution.image}`;
    schema.image = schema.logo;
  }
  if (institution.coverImage) {
    schema.image = institution.coverImage.startsWith("http") ? institution.coverImage : `${DOMAIN}/${institution.coverImage}`;
  }

  if (institution.address) {
    const { streetAddress, upazila, district, latitude, longitude } = institution.address;
    schema.address = {
      "@type": "PostalAddress",
      ...(streetAddress && { streetAddress }),
      ...(upazila && { addressLocality: upazila }),
      ...(district && { addressRegion: district }),
      "addressCountry": "BD"
    };

    if (latitude && longitude) {
      schema.geo = {
        "@type": "GeoCoordinates",
        "latitude": latitude,
        "longitude": longitude
      };
    }
  }

  return schema;
}

/**
 * 4. Article / Announcement Schema Generator (Notices)
 */
export function generateArticleSchema(notice: any) {
  const noticeUrl = `${DOMAIN}/notice/${notice.id}`;
  const publisherName = notice.Account?.name || "Classmaster";
  const publisherImage = notice.Account?.image
    ? (notice.Account.image.startsWith("http") ? notice.Account.image : `${DOMAIN}/${notice.Account.image}`)
    : LOGO_URL;

  return {
    "@context": "https://schema.org",
    "@type": notice.category === "notice" ? "Announcement" : "Article",
    "headline": notice.title,
    "description": notice.description || notice.title,
    "url": noticeUrl,
    "datePublished": notice.createdAt ? new Date(notice.createdAt).toISOString() : undefined,
    "dateModified": notice.updatedAt ? new Date(notice.updatedAt).toISOString() : undefined,
    "author": notice.Account ? (
      notice.Account.accountType === "academy"
        ? generateEducationalOrganizationSchema(notice.Account)
        : generatePersonSchema(notice.Account)
    ) : {
      "@type": "Organization",
      "name": publisherName
    },
    "publisher": {
      "@type": "Organization",
      "name": "Classmaster",
      "logo": {
        "@type": "ImageObject",
        "url": LOGO_URL
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": noticeUrl
    }
  };
}

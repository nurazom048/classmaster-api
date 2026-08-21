import express from 'express';
import { generateSitemap } from '../controllers/sitemap.controller';

const router = express.Router();

// Dynamic Sitemap Route
router.get('/sitemap.xml', generateSitemap);

// Robots.txt Route
router.get('/robots.txt', (req, res) => {
  const robots = `User-agent: *
Allow: /

Sitemap: https://api.classmaster.top/sitemap.xml
`;
  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send(robots);
});

export default router;

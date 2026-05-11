import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kkmmedia.de',
  trailingSlash: 'always',
  integrations: [
    sitemap(),
  ],
  // 301-Weiterleitungen für alte WordPress-URLs (404 → korrekte Seite)
  redirects: {
    // Stadtspezifische Leistungsseiten → neue Leistungsseiten
    // Beide Varianten (mit und ohne Trailing Slash) um "Alternative Seite"-Status zu vermeiden
    '/animationen-regensburg':             { status: 301, destination: '/leistungen/animationen/' },
    '/animationen-regensburg/':            { status: 301, destination: '/leistungen/animationen/' },
    '/social-media-marketing-regensburg':  { status: 301, destination: '/leistungen/social-media/' },
    '/social-media-marketing-regensburg/': { status: 301, destination: '/leistungen/social-media/' },
    '/videomarketing-regensburg':          { status: 301, destination: '/leistungen/animationen/' },
    '/videomarketing-regensburg/':         { status: 301, destination: '/leistungen/animationen/' },
    '/grafikdesign-regensburg':            { status: 301, destination: '/leistungen/grafikdesign/' },
    '/grafikdesign-regensburg/':           { status: 301, destination: '/leistungen/grafikdesign/' },
    '/seo-regensburg':                     { status: 301, destination: '/leistungen/seo/' },
    '/seo-regensburg/':                    { status: 301, destination: '/leistungen/seo/' },

    // Portfolio → Über uns
    '/marketing-agentur-portfolio/':       { status: 301, destination: '/ueber-uns/' },

    // Alte Blogbeiträge (Fotografie) → Leistungsseite Fotografie
    '/fotografie-regensburg-impressionen-traumfabrik-interview/': { status: 301, destination: '/leistungen/fotografie/' },
    '/fotografie-regensburg-impressionen-traumfabrik-handstand/': { status: 301, destination: '/leistungen/fotografie/' },

    // Alte WordPress-Medien & Video-Seiten → nächste passende Seite
    '/regensburg-videografie-mp4/':        { status: 301, destination: '/leistungen/animationen/' },
    '/kkm-logo-weis-transparent/':         { status: 301, destination: '/' },
    '/office2-jpg/':                       { status: 301, destination: '/' },

    // Alte WordPress-Kategorie-Seiten → Startseite
    '/category/travel/':                   { status: 301, destination: '/' },

    // Altes WordPress-Demo-Content (Dummy-Blogposts) → Startseite
    '/2021/11/03/similique-quis-a-libero-enim-quod-corporis/':   { status: 301, destination: '/' },
    '/2021/11/03/similique-quis-a-libero-enim-quod-corporis-3/': { status: 301, destination: '/' },
  },
});

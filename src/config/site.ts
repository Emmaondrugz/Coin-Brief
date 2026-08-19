/**
 * Single source of truth for anything that identifies this site.
 *
 * To rename the project, change `NEXT_PUBLIC_SITE_NAME` in `.env.local`
 * (or the fallbacks below). Nothing else should hardcode the name.
 */
export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME ?? "Crypto Brief",
  description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION ?? "A blog about cryptocurrency.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;

export type SiteConfig = typeof siteConfig;

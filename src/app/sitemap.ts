import { LINKS } from "@/utils/constants";

export default async function sitemap() {
  const baseSitemapGenerator = Object.values(LINKS.INTERNAL).map((link) => ({
    url: `${LINKS.BASE}${link}`,
    lastModified: new Date(),
  }));

  return [...baseSitemapGenerator];
}

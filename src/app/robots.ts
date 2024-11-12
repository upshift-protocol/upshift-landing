import { LINKS } from "@/utils/constants";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: Object.values(LINKS.INTERNAL),
      disallow: [],
    },
    sitemap: `${LINKS.BASE}/sitemap.xml`,
  };
}

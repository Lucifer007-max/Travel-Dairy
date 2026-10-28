import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const paths = ["", "/features", "/about", "/whats-new", "/support", "/download", "/privacy", "/terms", "/credits"];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((p) => ({ url: `${site.url}${p}`, changeFrequency: "monthly", priority: p === "" ? 1 : 0.6 }));
}

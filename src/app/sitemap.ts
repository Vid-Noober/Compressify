import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://compressify-five.vercel.app",
      lastModified: new Date(),
    },
    {
      url: "https://compressify-five.vercel.app/tools/image-compressor",
      lastModified: new Date(),
    },
  ];
}
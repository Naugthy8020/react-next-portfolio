import { MetadataRoute } from "next";
import { getAllCategoryList, getBlogList } from "./_libs/microcms";

const buildUrl = (path?: string) =>
  `https://react-next-portfolio-rust.vercel.app${path ?? ""}`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const blogContents = await getBlogList();
    const categoryContents = await getAllCategoryList();
    const now = new Date();

    const blogUrls: MetadataRoute.Sitemap = blogContents.contents.map(
      (content) => ({
        url: buildUrl(`/blog/${content.id}`),
        lastModified: content.revisedAt,
      })
    );

    const categoryUrls: MetadataRoute.Sitemap = categoryContents.map(
      (content) => ({
        url: buildUrl(`/blog/category/${content.id}`),
        lastModified: content.revisedAt,
      })
    );

    return [
      {
        url: buildUrl(),
        lastModified: now,
      },
      {
        url: buildUrl("/skills"),
        lastModified: now,
      },
      {
        url: buildUrl("/contact"),
        lastModified: now,
      },
      {
        url: buildUrl("/blog"),
        lastModified: now,
      },
      ...blogUrls,
      ...categoryUrls,
    ];
  } catch (error) {
    console.error("Sitemap generation error:", error);
    return [];
  }
}

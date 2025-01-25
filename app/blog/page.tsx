import { getBlogList } from "@/app/_libs/microcms";
import BlogList from "@/app/_components/BlogList";
import Pagination from "@/app/_components/Pagination";
import SearchField from "@/app/_components/SearchField";
import { BLOG_LIST_LIMIT } from "@/app/_constants";
import Image from "next/image";
import styles from "@/app/blog/page.module.css";

export default async function Page() {
  const { contents: blog, totalCount } = await getBlogList({
    limit: BLOG_LIST_LIMIT,
  });

  return (
    <>
      <Image
        className={styles.bgimg}
        src="/aurora.jpg"
        alt=""
        width={4000}
        height={1200}
        priority
        sizes="100vw"
      />
      <SearchField />
      <BlogList blog={blog} />
      <Pagination totalCount={totalCount} />
    </>
  );
}

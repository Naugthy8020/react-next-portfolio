import { getNewsList } from '@/app/_libs/microcms';
import NewsList from '@/app/_components/NewsList';
import Pagination from '@/app/_components/Pagination';
import SearchField from '@/app/_components/SearchField';
import { NEWS_LIST_LIMIT } from '@/app/_constants';
import Image from "next/image";
import styles from "@/app/news/page.module.css";

export default async function Page() {
  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
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
      <NewsList news={news} />
      <Pagination totalCount={totalCount} />
    </>
  );
}

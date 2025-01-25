import styles from "./page.module.css";
import Image from "next/image";
import Hero from "@/app/_components/Hero";
import { getBlogList } from "@/app/_libs/microcms";
import { TOP_BLOG_LIMIT } from "@/app/_constants";
import BlogList from "@/app/_components/BlogList";
import ButtonLink from "@/app/_components/ButtonLink";

export const revalidate = 60;

export default async function Home() {
  const data = await getBlogList({
    limit: TOP_BLOG_LIMIT,
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

      <Hero title="My-portfolio" sub="ポートフォリオ" />

      <div>
        <h1 className={styles.title}>田村　優典</h1>
        <p className={styles.description}>
          私は京都デザイン＆テクノロジー専門学校に在学している学生です。
        </p>
      </div>
      <ul className={styles.detailsist}>
        <li className={styles.details}>
          田村優典
          <br />
          京都デザインアンドテクノロジー専門学校在籍
          <br />
          日本人
        </li>

        <li className={styles.details}>
          Yusuke Tamura
          <br />
          kyoto-design＆technology　college
          <br />
          Im japanese
        </li>
      </ul>

      <div></div>
      <ul className={styles.detailsist}>
        <li className={styles.details}>
          田村優典
          <br />
          京都デザインアンドテクノロジー専門学校在籍
          <br />
          日本人
        </li>

        <li className={styles.details}>
          Yusuke Tamura
          <br />
          kyoto-design＆technology　college
          <br />
          Im japanese
        </li>
      </ul>

      <ul className={styles.detailsist}>
        <li className={styles.details}>
          田村優典
          <br />
          京都デザインアンドテクノロジー専門学校在籍
          <br />
          日本人
        </li>

        <li className={styles.details}>
          Yusuke Tamura
          <br />
          kyoto-design＆technology　college
          <br />
          Im japanese
        </li>
      </ul>
    </>
  );
}

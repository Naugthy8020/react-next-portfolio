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
      <div className={styles.profileContainer}>
  <img src="/my-icon.png" alt="My Icon" className={styles.profileImage} />
  <div className={styles.profileText}>
    <h1 className={styles.title}>田村　優典</h1>
    <p className={styles.description}>
      私は京都デザイン＆テクノロジー専門学校に在学している学生です。
      <br />学年１年生です。
      <br />専攻スーパーITエンジニア専攻です。
      <br />
      Yusuke Tamura
      <br />
      kyoto-design＆technology　college
      <br />
      Im japanese
    </p>
  </div>
</div>

      
    </>
  );
}

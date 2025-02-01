import Link from "next/link";
import Image from "next/image";
import type { Blog } from "@/app/_libs/microcms";
import Date from "../Date";
import Category from "../Category";
import styles from "./index.module.css";

type Props = {
  data: Blog;
};

export default function Article({ data }: Props) {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>{data.title}</h1>
        
        <div className={styles.contentslist}>
          {/* Text content on the left */}
          <div className={styles.leftContent}>
            <p className={styles.description}>{data.description}</p>
            <div className={styles.meta}>
              <Link href={`/blog/category/${data.category.id}`} className={styles.categoryLink}>
                <Category category={data.category} />
              </Link>
              <Date date={data.publishedAt ?? data.createdAt} />
            </div>
          </div>

          {/* Thumbnail image on the right */}
          {data.thumbnail && (
            <Image
              src={data.thumbnail.url}
              alt=""
              className={styles.thumbnail}
              width={data.thumbnail.width}
              height={data.thumbnail.height}
            />
          )}
        </div>

        {/* Content body */}
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
      </div>
    </main>
  );
}

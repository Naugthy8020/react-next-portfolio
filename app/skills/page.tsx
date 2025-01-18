import Image from "next/image";
import { skillsList } from "@/app/_libs/microcms";
import { SKIllS_LIST_LIMIT } from "@/app/_constants";
import styles from "./page.module.css";

export default async function Page() {
  const data = await skillsList({ limit: SKIllS_LIST_LIMIT });
  return (
    <div className={styles.container}>
      {data.contents.length === 0 ? (
        <p className={styles.empty}>メンバーが登録されていません。</p>
      ) : (
        <ul>
          {data.contents.map((skill) => (
            <li key={skill.id} className={styles.list}>
              <Image
                src={skill.image.url}
                alt=""
                width={skill.image.width}
                height={skill.image.height}
                className={styles.image}
              />
              <dl>
                <dt className={styles.name}>{skill.skill}</dt>
                <dd className={styles.profile}>{skill.detail}</dd>
              </dl>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

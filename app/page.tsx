import Image from "next/image";
import styles from "./page.module.css";
const name = "宇宙";

export default function Home() {
  return (
    <section>
      <div>
        <h1 className={styles.title}>テクノロジーの力で{name}を変える</h1>
        <p className={styles.description}>
          私たちは市場をリードしているグローバルテックカンパニーです。
        </p>
      </div>
      <img className={styles.bgimg} src="/img-mv.jpg" alt="" />
    </section>
  );
}

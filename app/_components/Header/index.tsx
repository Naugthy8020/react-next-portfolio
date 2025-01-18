import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
import Menu from "../Menu";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logoLink}>
        <Image
          src="/butterfly.png"
          alt="my pages"
          className={styles.logo}
          width={800}
          height={400}
          priority
        />
      </Link>
      <Menu />
    </header>
  );
}

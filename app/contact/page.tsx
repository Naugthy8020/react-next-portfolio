import ContactForm from "@/app/_components/ContactForm";
import styles from "./page.module.css";
import Image from "next/image";

export default function Page() {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        ご質問、ご相談は下記フォームよりお問い合わせください。
        <br />
        内容確認後、早急にご連絡いたします。
      </p>
      <Image
        className={styles.bgimg}
        src="/aurora.jpg"
        alt=""
        width={4000}
        height={1200}
        priority
        sizes="100vw"
      />
      <ContactForm />
    </div>
  );
}

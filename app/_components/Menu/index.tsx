"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import cx from "classnames";
import styles from "./index.module.css";

export default function Menu() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const open = () => setOpen(true);
  const close = () => setOpen(false);

  // メニューリンクがクリックされた時にメニューを閉じる
  const handleLinkClick = () => {
    close();
  };

  return (
    <div>
      <nav className={cx(styles.nav, isOpen && styles.open)}>
        <ul className={styles.items}>
          <li>
            <Link href="/blog" onClick={handleLinkClick}>制作物</Link>
          </li>
          <li>
            <Link href="/skills" onClick={handleLinkClick}>スキル</Link>
          </li>
          <li>
            <Link href="/contact" onClick={handleLinkClick}>お問い合わせ</Link>
          </li>
        </ul>
        {/* 閉じるボタン */}
        <button
          className={cx(styles.button, styles.close)}
          onClick={close}
        >
          <Image
            src="/close.svg"
            alt="閉じる"
            width={24}
            height={24}
            priority
          />
        </button>
      </nav>
      
      {/* ハンバーガーメニューアイコン（右上） */}
      {!isOpen && (
        <button className={styles.button} onClick={open}>
          <Image
            src="/menu.svg"
            alt="メニュー"
            width={24}
            height={24}
          />
        </button>
      )}
    </div>
  );
}

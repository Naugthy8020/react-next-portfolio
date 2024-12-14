import { NEWS_LIST_LIMIT } from "@/app/_constants";
import Link from "next/link";
import styels from "./index.module.css";
import { link } from "fs";
type Props = {
  totalCount: number;
  current?: number;
};

export default function Pagination({ totalCount, current = 1 }: Props) {
  const pages = Array.from(
    { length: Math.ceil(totalCount / NEWS_LIST_LIMIT) },
    (_, i) => i + 1
  );
  return (
    <nav>
      <ul className={styels.container}>
        {pages.map((p) => (
          <li className={styels.list} key={p}>
            {current !== p ? (
              <Link href={`/news/p/${p}`} className={styels.item}>
                {p}
              </Link>
            ) : (
              <span className={`${styels.item}${styels.current}`}>{p}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

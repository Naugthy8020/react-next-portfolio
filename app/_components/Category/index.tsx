import type { Category } from "@/app/_libs/microms";
import styles from "./index.module.css";

type Props = {
  category: Category;
};

export default function Category({ category }: Props) {
  return <span className={styles.tag}>{category.name}</span>;
}

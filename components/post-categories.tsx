import { faFolderOpen } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import styles from "styles/post-categories.module.css";
import { CategoryType } from "interfaces/index";

export default function PostCategories({ categories }: {categories: CategoryType[]}) {
  return (
    <div className={styles.flexContainer}>
      <h3 className={styles.heading}>
        <FontAwesomeIcon icon={faFolderOpen} />
        <span className="sr-only">Categories</span>
      </h3>
      <ul className={styles.list}>
        {categories.map(({ slug }) => (
          <li key={slug}>
            <Link href={`/blog/category/${slug}`}></Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

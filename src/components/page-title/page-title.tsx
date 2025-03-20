import { ReactElement } from "react";
import styles from "./page-title.module.scss";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";

interface Props {
  title: string;
}

function PageTitle({ title }: Props): ReactElement {
  return (
    <section className={styles.page_title}>
      <div className="container">
        <h1 className={styles.page_title__main}>{title}</h1>
        <div className={styles.page_title__breadcrumb}>
          <div className={styles.page_title__breadcrumb__item}>
            <Link to="/">Главная</Link>
          </div>
          <div className={styles.page_title__breadcrumb__icon}>
            <Icon
              icon="material-symbols-light:keyboard-double-arrow-right-rounded"
              width="24"
              height="24"
            />
          </div>
          <div className={styles.page_title__breadcrumb__item}>{title}</div>
        </div>
      </div>
    </section>
  );
}

export default PageTitle;

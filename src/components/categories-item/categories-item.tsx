import { ReactElement } from "react";
import { Categories } from "../../interfaces/categories";
import styles from "./categories-item.module.scss";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

interface Props {
  item: Categories;
}

export default function CategoriesItem({ item }: Props): ReactElement {
  return (
    <div className={styles.categories_item}>
      <picture className={styles.categories_item__image}>
        <img src={`./assets/image/${item.image}`} alt={item.title} />
      </picture>
      <div className={styles.categories_item__content}>
        <div className={styles.categories_item__icon}>
          <img src={`./assets/image/${item.icon}`} alt={item.title} />
        </div>
        <h3 className={styles.categories_item__title}>{item.title}</h3>
      </div>
      <Link to="/services" className={styles.categories_item__link}>
        Подробнее{" "}
        <Icon
          icon="material-symbols-light:line-end-arrow-outline-rounded"
          width="35"
          height="35"
        />
      </Link>
    </div>
  );
}

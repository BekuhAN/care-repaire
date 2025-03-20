import { ReactElement } from "react";
import styles from "./statistic.module.scss";
import SectionTitle from "../section-title/section-title";

function Statistic(): ReactElement {
  return (
    <section className={styles.statistic}>
      <div className="container">
        <SectionTitle
          title="Стремление к непревзойденным результатам."
          subtitle="Статистика компании"
        />
        <div className={styles.statistic__list}>
          <div className={styles.statistic__item}>
            <div className={styles.statistic__item__icon}>
              <img src="/src/assets/statistic-1.svg" />
            </div>
            <div className={styles.statistic__item__value}>3568+</div>
            <div className={styles.statistic__item__title}>Клиентов</div>
          </div>
          <div className={styles.statistic__item}>
            <div className={styles.statistic__item__icon}>
              <img src="/src/assets/statistic-2.svg" />
            </div>
            <div className={styles.statistic__item__value}>2360+</div>
            <div className={styles.statistic__item__title}>Оборудования</div>
          </div>
          <div className={styles.statistic__item}>
            <div className={styles.statistic__item__icon}>
              <img src="/src/assets/statistic-3.svg" />
            </div>
            <div className={styles.statistic__item__value}>1547+</div>
            <div className={styles.statistic__item__title}>Экспертов</div>
          </div>
          <div className={styles.statistic__item}>
            <div className={styles.statistic__item__icon}>
              <img src="/src/assets/statistic-4.svg" />
            </div>
            <div className={styles.statistic__item__value}>1823+</div>
            <div className={styles.statistic__item__title}>Отзывов</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Statistic;

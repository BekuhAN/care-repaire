import { ReactElement } from "react";
import styles from "./contacts-info.module.scss";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function ContactsInfo(): ReactElement {
  return (
    <section className={styles.contacts_info}>
      <div className={styles.contacts_info__item}>
        <div className={styles.contacts_info__item__icon}>
          <Icon
            icon="material-symbols-light:nest-clock-farsight-analog-outline"
            width="100"
            height="100"
          />
        </div>
        <div className={styles.contacts_info__item__text}>
          <div className={styles.contacts_info__item__title}>
            Мы открыты с понедельника по пятницу
          </div>
          <div className={styles.contacts_info__item__value}>8:00 - 20:00</div>
        </div>
      </div>
      <div className={styles.contacts_info__item}>
        <div className={styles.contacts_info__item__icon}>
          <Icon
            icon="material-symbols-light:phone-in-talk-outline-rounded"
            width="100"
            height="100"
          />
        </div>
        <div className={styles.contacts_info__item__text}>
          <div className={styles.contacts_info__item__title}>Есть вопросы?</div>
          <div className={styles.contacts_info__item__value}>
            8 (800) 555-35-35
          </div>
        </div>
      </div>
      <div className={styles.contacts_info__item}>
        <div className={styles.contacts_info__item__icon}>
          <Icon
            icon="material-symbols-light:map-outline-rounded"
            width="100"
            height="100"
          />
        </div>
        <div className={styles.contacts_info__item__text}>
          <div className={styles.contacts_info__item__title}>
            Нужен ремонт? Наш адрес
          </div>
          <div className={styles.contacts_info__item__value}>
            Уральская 31, г. Краснодар
          </div>
        </div>
      </div>
    </section>
  );
}

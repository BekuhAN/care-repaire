import { ReactElement } from "react";
import styles from "./footer.module.scss";
import clsx from "clsx";
import { Button } from "keep-react";
import { Link, useNavigate } from "react-router-dom";
import { useNavigate as useNavList } from "../../data-access/navigate/use-navigate";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Footer(): ReactElement {
  const navigate = useNavigate();
  const navList = useNavList();

  return (
    <footer className={styles.footer}>
      <div className={clsx("container", styles.footer__inner)}>
        <div className={styles.footer__column}>
          <div className={styles.footer__title}>О сервисе</div>
          <div className={styles.footer__text}>
            Наша компания — это команда опытных специалистов, которые быстро и
            качественно устранят любые неисправности автомобиля. Мы используем
            современное оборудование и оригинальные запчасти, чтобы
            гарантировать высокий стандарт обслуживания. Доверьте свой
            автомобиль профессионалам!
          </div>
          <Button size="2xl" onClick={() => navigate("/about")}>
            Подробнее
          </Button>
        </div>
        <div className={styles.footer__column}>
          <div className={styles.footer__title}>Навигация</div>
          <nav className={styles.footer__navigate}>
            <ul className={styles.footer__navigate__list}>
              {navList.length > 0 &&
                navList.map((item) => (
                  <li key={item.id} className={styles.footer__navigate__item}>
                    <Icon
                      icon="material-symbols-light:keyboard-double-arrow-right-rounded"
                      width="24"
                      height="24"
                    />
                    <Link
                      className={styles.footer__navigate__link}
                      to={item.path}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>
        </div>
        <div className={styles.footer__column}>
          <div className={styles.footer__title}>Контакты</div>
          <div className={styles.footer__contacts}>
            <div className={styles.footer__contacts__item}>
              <div className={styles.footer__contacts__title}>
                Номер телефона
              </div>
              <div className={styles.footer__contacts__value}>
                <div className={styles.footer__contacts__icon}>
                  <Icon
                    icon="material-symbols-light:phone-enabled-outline"
                    width="18"
                    height="18"
                  />
                </div>
                <a href="tel:8(800)555-35-35">8 (800) 555-35-35</a>
              </div>
            </div>
            <div className={styles.footer__contacts__item}>
              <div className={styles.footer__contacts__title}>
                Электронная почта
              </div>
              <div className={styles.footer__contacts__value}>
                <div className={styles.footer__contacts__icon}>
                  <Icon
                    icon="material-symbols-light:mail-outline-rounded"
                    width="18"
                    height="18"
                  />
                </div>
                <a href="mailto:info@car.ru">info@car.ru</a>
              </div>
            </div>
            <div className={styles.footer__contacts__item}>
              <div className={styles.footer__contacts__title}>
                Наше расположение
              </div>
              <div className={styles.footer__contacts__value}>
                <div className={styles.footer__contacts__icon}>
                  <Icon
                    icon="material-symbols-light:location-on-outline-rounded"
                    width="18"
                    height="18"
                  />
                </div>
                Уральская 31, г. Краснодар
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer__copyright}>Copyright © 2025 </div>
    </footer>
  );
}

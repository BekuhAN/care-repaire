import { ReactElement } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { useNavigate } from "../../data-access/navigate/use-navigate";
import styles from "./header.module.scss";
import clsx from "clsx";
import { Button } from "keep-react";
import { Icon } from "@iconify/react";

export default function Header(): ReactElement {
  const navList = useNavigate();
  return (
    <header className={styles.header}>
      <div className={clsx(styles.header__inner, "container")}>
        <Link className={styles.header__logo} to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <div className={styles.header__contacts}>
          <div className={styles.header__contacts__item}>
            <div className={styles.header__contacts__item__icon}>
              <Icon
                icon="material-symbols-light:stacked-email-outline-rounded"
                width="55"
                height="55"
              />
            </div>
            <div className={styles.header__contacts__item__text}>
              <div className={styles.header__contacts__item__title}>
                Написать нам
              </div>
              <a
                href="mailto:info@car.ru"
                className={styles.header__contacts__item__value}
              >
                info@car.ru
              </a>
            </div>
          </div>
          <div className={styles.header__contacts__item}>
            <div className={styles.header__contacts__item__icon}>
              <Icon
                icon="material-symbols-light:headset-mic-outline-rounded"
                width="55"
                height="55"
              />
            </div>
            <div className={styles.header__contacts__item__text}>
              <div className={styles.header__contacts__item__title}>
                Поддержка 24/7
              </div>
              <a
                href="tel:8 (800) 555-35-35"
                className={styles.header__contacts__item__value}
              >
                8 (800) 555-35-35
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.dark}>
        <div className={clsx(styles.header__inner, "container")}>
          <nav className={styles.header__nav}>
            <ul className={styles.header__nav__list}>
              {navList.length > 0 &&
                navList.map((item) => (
                  <li key={item.id} className={styles.header__nav__item}>
                    <Link className={styles.header__nav__link} to={item.path}>
                      {item.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>
          <Button className={styles.header__btn} color="primary">
            Записаться
          </Button>
        </div>
      </div>
    </header>
  );
}

import { ReactElement } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { useNavigate } from "../../data-access/navigate/use-navigate";
import styles from "./header.module.scss";
import clsx from "clsx";

export default function Header(): ReactElement {
  const navList = useNavigate();
  return (
    <header className={styles.header}>
      <div className={clsx(styles.header__inner, "container")}>
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <nav className={styles.header__nav}>
          <ul className={styles.header__nav__list}>
            {navList.length > 0 &&
              navList.map((item) => (
                <li key={item.id} className={styles.header__nav__item}>
                  <Link className={styles.header__nav__link} to={item.url}>
                    {item.title}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
        
      </div>
    </header>
  );
}

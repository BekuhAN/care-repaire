import { ReactElement } from "react";
import styles from "./section-title.module.scss";
import clsx from "clsx";

interface Props {
  title: string;
  subtitle: string;
  position?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  position,
}: Props): ReactElement {
  return (
    <div className={clsx(styles.section_title, position && `${position}`)}>
      <h3 className={styles.section_title__sub}>
        <span className={styles.section_title__sub__icon}></span>
        {subtitle}
        {position === "center" && (
          <span className={styles.section_title__sub__icon}></span>
        )}
      </h3>
      <h2 className={styles.section_title__main}>{title}</h2>
    </div>
  );
}

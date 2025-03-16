import { ReactElement } from "react";

import styles from "./preview.module.scss";
import { Button } from "keep-react";
import { useNavigate } from "react-router-dom";

export default function Preview(): ReactElement {
  const navigate = useNavigate();
  return (
    <section className={styles.preview}>
      <div className="container">
        <div className={styles.preview__inner}>
          <div className={styles.preview__subtitle}>
            <span>Станция</span>
            <span>Технического</span>
            <span>Обслуживания</span>
          </div>
          <h1 className={styles.preview__title}>
            Профессиональное обслуживание автомобилей
          </h1>
          <Button
            size="xl"
            onClick={() => {
              navigate("/about");
            }}
          >
            О сервисе
          </Button>
        </div>
      </div>
    </section>
  );
}

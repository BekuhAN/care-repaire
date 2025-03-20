import { ReactElement } from "react";
import styles from "./promo.module.scss";
import clsx from "clsx";
import SectionTitle from "../section-title/section-title";
import { Button } from "keep-react";
import { useNavigate } from "react-router-dom";

export default function Promo(): ReactElement {
  const navigate = useNavigate();

  return (
    <section className={styles.promo}>
      <div className={clsx("container", styles.promo__inner)}>
        <SectionTitle
          title="Получите премиальное обслуживание. Свяжитесь с нами."
          subtitle="Получите наши услуги"
        />
        <div className={styles.promo__buttons}>
          <Button
            size="2xl"
            onClick={() => {
              navigate("/services");
            }}
          >
            Наши услуги
          </Button>
          <Button
            size="2xl"
            variant="outline"
            onClick={() => {
              navigate("/contacts");
            }}
          >
            Контакты
          </Button>
        </div>
      </div>
    </section>
  );
}

import { ReactElement } from "react";
import styles from "./appointment.module.scss";
import clsx from "clsx";
import SectionTitle from "../section-title/section-title";
import AppointmentForm from "../appointment-form/appointment-form";

export default function Appointment(): ReactElement {
  return (
    <section className={styles.appointment}>
      <div className={clsx(styles.appointment__inner, "container")}>
        <div className={styles.appointment__image}>
          <div className={styles.appointment__image__experience}>
            <span>20+</span>
            Лет опыта
          </div>
        </div>
        <div className={styles.appointment__form}>
          <SectionTitle
            title="Назначить встречу"
            subtitle="Нужны наши услуги"
            position="left"
          />
          <div className={styles.appointment__form__wrapper}>
            <AppointmentForm />
          </div>
        </div>
      </div>
    </section>
  );
}

import { FormEvent, ReactElement, useRef } from "react";
import { Button, Input, InputIcon, Textarea, toast } from "keep-react";
import styles from "./contacts.module.scss";
import PageTitle from "../../components/page-title/page-title";
import clsx from "clsx";
import SectionTitle from "../../components/section-title/section-title";
import { Icon } from "@iconify/react/dist/iconify.js";
import emailjs from "@emailjs/browser";

function Contacts(): ReactElement {
  const formRef = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent) => {
    //meezig@bvioc.vip
    e.preventDefault();
    emailjs
      .sendForm("service_34vli0j", "template_41qtdpo", formRef.current || "", {
        publicKey: "zhyxOiANOoM9ok4AM",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Успешно отправлено!");
          formRef.current?.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error(`Ошибка... ${error.text}`);
        }
      );
  };

  return (
    <main className={styles.contacts}>
      <PageTitle title="Контакты" />
      <div className={clsx("container", styles.contacts__inner)}>
        <div className={styles.contacts__info}>
          <div className={styles.contacts__details}>
            <SectionTitle subtitle="Контакты" title="Связаться с нами" />
            <div className={styles.contacts__details__description}>
              Вы можете связаться с нами по телефону, электронной почте или
              через социальные сети.
            </div>
            <div className={styles.contacts__details__list}>
              <div className={styles.contacts__details__item}>
                <div className={styles.contacts__details__item__icon}>
                  <Icon
                    icon="material-symbols-light:phone-in-talk-outline-rounded"
                    width="40"
                    height="40"
                  />
                </div>
                <div className={styles.contacts__details__item__content}>
                  <div className={styles.contacts__details__item__title}>
                    Телефонный звонок
                  </div>
                  <div className={styles.contacts__details__item__value}>
                    <a href="tel:8 (800) 555-35-35">8 (800) 555-35-35</a>
                  </div>
                </div>
              </div>
              <div className={styles.contacts__details__item}>
                <div className={styles.contacts__details__item__icon}>
                  <Icon
                    icon="material-symbols-light:mail-outline-rounded"
                    width="40"
                    height="40"
                  />
                </div>
                <div className={styles.contacts__details__item__content}>
                  <div className={styles.contacts__details__item__title}>
                    Напишите нам по электронной почте
                  </div>
                  <div className={styles.contacts__details__item__value}>
                    <a href="mailto:info@car.ru">info@car.ru</a>
                  </div>
                </div>
              </div>
              <div className={styles.contacts__details__item}>
                <div className={styles.contacts__details__item__icon}>
                  <Icon
                    icon="material-symbols-light:location-on-outline-rounded"
                    width="40"
                    height="40"
                  />
                </div>
                <div className={styles.contacts__details__item__content}>
                  <div className={styles.contacts__details__item__title}>
                    Расположение
                  </div>
                  <div className={styles.contacts__details__item__value}>
                    Уральская 31, г. Краснодар
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.contacts__social}>
              Подпишись на нас:
              <a
                href="https://vk.com/"
                className={styles.contacts__social__item}
              >
                <Icon icon="fa-brands:vk" width="20" height="20" />
              </a>
              <a
                href="https://whatsapp.com/"
                className={styles.contacts__social__item}
              >
                <Icon icon="fa-brands:whatsapp" width="20" height="20" />
              </a>
              <a
                href="https://telegram.org/"
                className={styles.contacts__social__item}
              >
                <Icon icon="fa-brands:telegram-plane" width="20" height="20" />
              </a>
            </div>
          </div>
          <div className={styles.contacts__form}>
            <div className={styles.contacts__form__title}>
              Отправьте нам сообщение
            </div>
            <form
              className={styles.contacts__form__wrapper}
              ref={formRef}
              onSubmit={sendEmail}
            >
              <fieldset className={clsx(" relative max-w-md")}>
                <Input
                  placeholder="Ваше имя *"
                  className="ps-11"
                  required
                  name="contacts_name"
                />
                <InputIcon className={styles.contacts__form__icon}>
                  <Icon
                    icon="material-symbols-light:account-circle"
                    width="24"
                    height="24"
                  />
                </InputIcon>
              </fieldset>
              <fieldset className="relative max-w-md">
                <Input
                  type="email"
                  placeholder="Ваша почта *"
                  className="ps-11"
                  required
                  name="contacts_email"
                />
                <InputIcon className={styles.contacts__form__icon}>
                  <Icon
                    icon="material-symbols-light:mail-outline-rounded"
                    width="24"
                    height="24"
                  />
                </InputIcon>
              </fieldset>
              <fieldset
                className={clsx(
                  styles.contacts__form__span,
                  " relative max-w-md"
                )}
              >
                <Input
                  type="text"
                  placeholder="Тема письма *"
                  className="ps-11"
                  required
                  name="contacts_theme"
                />
                <InputIcon className={styles.contacts__form__icon}>
                  <Icon
                    icon="material-symbols-light:subheader-outline-rounded"
                    width="24"
                    height="24"
                  />
                </InputIcon>
              </fieldset>
              <fieldset
                className={clsx(
                  styles.contacts__form__span,
                  " relative max-w-md"
                )}
              >
                <Textarea
                  placeholder="Введите сообщение"
                  name="contacts_message"
                  rows={4}
                />
                <InputIcon
                  className={clsx(
                    styles.contacts__form__icon,
                    styles.contacts__form__icon__chat
                  )}
                >
                  <Icon
                    icon="material-symbols-light:chat-bubble-outline"
                    width="24"
                    height="24"
                  />
                </InputIcon>
              </fieldset>
              <Button type="submit">Отправить</Button>
            </form>
          </div>
        </div>
        <div className={styles.contacts__map}>
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A796749b952b64eb806058f1902e7d18d6406f417037ef360bb4650c48a02f923&amp;source=constructor"
            width="100%"
            height="500"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </main>
  );
}

export default Contacts;

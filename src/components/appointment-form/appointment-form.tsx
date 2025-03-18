import { FormEvent, ReactElement, useRef } from "react";
import styles from "./appointment-form.module.scss";
import {
  Button,
  Input,
  InputIcon,
  Select,
  SelectAction,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectValue,
  Textarea,
  toast,
} from "keep-react";
import { Icon } from "@iconify/react";
import clsx from "clsx";
import emailjs from "@emailjs/browser";
import { useCategories } from "../../data-access/categories/use-categories";

export default function AppointmentForm(): ReactElement {
  const formRef = useRef<HTMLFormElement | null>(null);
  const categories = useCategories();

  const sendEmail = (e: FormEvent) => {
    //meezig@bvioc.vip
    e.preventDefault();
    emailjs
      .sendForm("service_34vli0j", "template_iau3d5w", formRef.current || "", {
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
    <form
      className={styles.appointment_form}
      ref={formRef}
      onSubmit={sendEmail}
    >
      <fieldset
        className={clsx(styles.appointment_form__span, " relative max-w-md")}
      >
        <Input
          placeholder="Ваше имя *"
          className="ps-11"
          required
          name="appoint_name"
        />
        <InputIcon className={styles.appointment_form__icon}>
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
          name="appoint_email"
        />
        <InputIcon className={styles.appointment_form__icon}>
          <Icon
            icon="material-symbols-light:mail-outline-rounded"
            width="24"
            height="24"
          />
        </InputIcon>
      </fieldset>
      <fieldset className="relative max-w-md">
        <Input
          type="date"
          placeholder="Ваша почта *"
          className="ps-11"
          min={new Date().toISOString().split("T")[0]}
          required
          name="appoint_date"
        />
        <InputIcon className={styles.appointment_form__icon}>
          <Icon
            icon="material-symbols-light:calendar-month-rounded"
            width="24"
            height="24"
          />
        </InputIcon>
      </fieldset>
      <fieldset
        className={clsx(styles.appointment_form__span, " relative max-w-md")}
      >
        <Select required name="appoint_service">
          <SelectAction className={clsx(" relative max-w-md h-[60px]")}>
            <div className="flex items-center gap-2.5">
              <span className={styles.appointment_form__icon}>
                <Icon
                  icon="material-symbols-light:car-gear-outline"
                  width="24"
                  height="24"
                />
              </span>
              <SelectValue placeholder="Выберите услугу *" />
            </div>
          </SelectAction>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>
                <strong>Услуги </strong>
              </SelectLabel>
              {categories.length > 0 &&
                categories.map((category) => (
                  <SelectItem key={category.id} value={category.title}>
                    {category.title}
                  </SelectItem>
                ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </fieldset>
      <fieldset
        className={clsx(styles.appointment_form__span, " relative max-w-md")}
      >
        <Textarea
          placeholder="Введите сообщение"
          name="appoint_message"
          rows={4}
        />
        <InputIcon
          className={clsx(
            styles.appointment_form__icon,
            styles.appointment_form__icon__chat
          )}
        >
          <Icon
            icon="material-symbols-light:chat-bubble-outline"
            width="24"
            height="24"
          />
        </InputIcon>
      </fieldset>
      <Button type="submit">Записаться</Button>
    </form>
  );
}

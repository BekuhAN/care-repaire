import { ReactElement } from "react";
import Preview from "../../components/preview/preview";
import Appointment from "../../components/appointment/appointment";
import ContactsInfo from "../../components/contacts-info/contacts-info";
import Categories from "../../components/categories/categories";

export default function Home(): ReactElement {
  return (
    <main>
      <Preview />
      <Appointment />
      <ContactsInfo />
      <Categories />
    </main>
  );
}

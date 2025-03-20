import { ReactElement } from "react";
import Preview from "../../components/preview/preview";
import Appointment from "../../components/appointment/appointment";
import ContactsInfo from "../../components/contacts-info/contacts-info";
import Categories from "../../components/categories/categories";
import Promo from "../../components/promo/promo";
import Team from "../../components/team/team";
import Statistic from "../../components/statistic/statistic";
import Comments from "../../components/comments/comments";

export default function Home(): ReactElement {
  return (
    <main>
      <Preview />
      <Appointment />
      <ContactsInfo />
      <Categories />
      <Promo />
      <Team />
      <Statistic />
      <Comments />
    </main>
  );
}

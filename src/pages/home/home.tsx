import { ReactElement } from "react";
import Preview from "../../components/preview/preview";
import Appointment from "../../components/appointment/appointment";

export default function Home(): ReactElement {
  return (
    <main>
      <Preview />
      <Appointment />
    </main>
  );
}

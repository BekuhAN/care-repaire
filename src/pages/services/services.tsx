import { ReactElement, useState } from "react";

import styles from "./services.module.scss";
import PageTitle from "../../components/page-title/page-title";
import clsx from "clsx";
import { useCategories } from "../../data-access/categories/use-categories";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Categories } from "../../interfaces/categories";
import { useServices } from "../../data-access/services/use-services";
import {
  Accordion,
  AccordionAction,
  AccordionContent,
  AccordionIcon,
  AccordionItem,
  AccordionTitle,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "keep-react";

function Services(): ReactElement {
  const categories = useCategories();
  const [activeCategory, setActiveCategory] = useState(1);
  const servicesList = useServices({ categoryId: activeCategory });

  function setCategory(item: Categories) {
    setActiveCategory(item.id);
    window.scrollTo(0, 500);
  }

  return (
    <main className={styles.services}>
      <PageTitle title="Услуги" />
      <div className={clsx(styles.services__inner, "container")}>
        <div className={styles.services__categories}>
          <div className={styles.services__categories__title}>
            Все категории
          </div>
          <ul className={styles.services__categories__list}>
            {categories.length > 0 &&
              categories.map((item) => (
                <li
                  key={item.id}
                  className={clsx(
                    styles.services__categories__item,
                    activeCategory == item.id && styles.active
                  )}
                  onClick={() => setCategory(item)}
                >
                  <Icon
                    icon="material-symbols-light:keyboard-double-arrow-right-rounded"
                    width="24"
                    height="24"
                  />{" "}
                  {item.title}
                </li>
              ))}
          </ul>
        </div>
        <div className={styles.services__list}>
          <Accordion type="multiple">
            {servicesList.length > 0 &&
              servicesList.map((item) => (
                <AccordionItem
                  className={styles.services__item}
                  key={item.id}
                  value={`item-${item.id}`}
                >
                  <AccordionAction>
                    <AccordionTitle className={styles.services__item__wrapper}>
                      <div className={styles.services__item__image}>
                        <img src={`./assets/image/${item.image}`} />
                      </div>
                      <div className={styles.services__item__content}>
                        <div className={styles.services__item__title}>
                          {item.title}
                        </div>
                        <div className={styles.services__item__price}>
                          от {item.price} ₽
                        </div>
                      </div>
                    </AccordionTitle>
                    <AccordionIcon />
                  </AccordionAction>
                  <AccordionContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>
                            <div className="max-w-[250px]">Наименование</div>
                          </TableHead>
                          <TableHead>
                            <div className="w-[50px]">Стоимость</div>
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {item.info.length > 0 &&
                          item.info.map((itemInfo) => (
                            <TableRow key={itemInfo.id}>
                              <TableCell>
                                <div className="max-w-[250px] truncate">
                                  {itemInfo.name}
                                </div>
                              </TableCell>
                              <TableCell>от {itemInfo.price} ₽</TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </AccordionContent>
                </AccordionItem>
              ))}
          </Accordion>
        </div>
      </div>
    </main>
  );
}

export default Services;

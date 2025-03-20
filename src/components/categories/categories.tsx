import { ReactElement } from "react";
import styles from "./categories.module.scss";
import SectionTitle from "../section-title/section-title";
import autoPlay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselButtons,
  CarouselControl,
  CarouselItem,
  CarouselNextButton,
  CarouselPrevButton,
  CarouselSlides,
} from "keep-react";
import { useCategories } from "../../data-access/categories/use-categories";
import CategoriesItem from "../categories-item/categories-item";

export default function Categories(): ReactElement {
  const categories = useCategories();

  return (
    <section className={styles.categories}>
      <div className="container">
        <SectionTitle
          title="Наша зона обслуживания"
          subtitle="Услуги, которые мы предоставляем"
          position="center"
        />
        <div className={styles.categories__list}>
          <Carousel
            options={{ loop: true }}
            plugins={[autoPlay()]}
            className={styles.categories__inner}
          >
            <CarouselSlides className="flex">
              {categories.length > 0 &&
                categories.map((item) => (
                  <CarouselItem
                    key={item.id}
                    className={styles.categories__item}
                  >
                    <CategoriesItem item={item} />
                  </CarouselItem>
                ))}
            </CarouselSlides>
            <CarouselControl className={styles.categories__control}>
              <CarouselButtons className={styles.categories__buttons}>
                <CarouselPrevButton
                  className={styles.categories__buttons__item}
                />
                <CarouselNextButton
                  className={styles.categories__buttons__item}
                />
              </CarouselButtons>
            </CarouselControl>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

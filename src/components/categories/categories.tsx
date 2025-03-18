import { ReactElement } from "react";
import styles from "./categories.module.scss";
import SectionTitle from "../section-title/section-title";
import {
  Carousel,
  CarouselButtons,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
  CarouselNextButton,
  CarouselPrevButton,
  CarouselSlides,
} from "keep-react";
import { useCategories } from "../../data-access/categories/use-categories";

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
          <Carousel options={{ slidesToScroll: 2 }}>
            <CarouselSlides className="flex">
              {categories.length > 0 &&
                categories.map((item) => (
                  <CarouselItem key={item.id} className="flex-[0_0_50%]">
                    <div className="">
                      <h1 className="">{item.title}</h1>
                    </div>
                  </CarouselItem>
                ))}
            </CarouselSlides>
            <CarouselControl>
              <CarouselButtons>
                <CarouselPrevButton />
                <CarouselNextButton />
              </CarouselButtons>
              <CarouselIndicators />
            </CarouselControl>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

import { ReactElement } from "react";
import SectionTitle from "../section-title/section-title";
import styles from "./comments.module.scss";
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
import { useComments } from "../../data-access/comments/use-comments";
import CommentsItem from "../comments-item/comments-item";

function Comments(): ReactElement {
  const comments = useComments();
  return (
    <section className={styles.comments}>
      <div className="container">
        <SectionTitle
          title="Что говорят клиенты"
          subtitle="Наши довольные клиенты"
          position="center"
        />
        <Carousel
          options={{ loop: true }}
          plugins={[autoPlay()]}
          className={styles.comments__inner}
        >
          <CarouselSlides className="flex">
            {comments.length > 0 &&
              comments.map((item) => (
                <CarouselItem key={item.id} className={styles.comments__item}>
                  <CommentsItem item={item} />
                </CarouselItem>
              ))}
          </CarouselSlides>
          <CarouselControl className={styles.comments__control}>
            <CarouselButtons className={styles.comments__buttons}>
              <CarouselPrevButton className={styles.comments__buttons__item} />
              <CarouselNextButton className={styles.comments__buttons__item} />
            </CarouselButtons>
          </CarouselControl>
        </Carousel>
      </div>
    </section>
  );
}

export default Comments;

import { ReactElement } from "react";
import styles from "./team.module.scss";
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
import { useTeam } from "../../data-access/team/use-team";
import TeamItem from "../team-item/team-item";

export default function Team(): ReactElement {
  const team = useTeam();
  return (
    <section className={styles.team}>
      <div className="container">
        <SectionTitle
          title="Познакомьтесь с нашими экспертами"
          subtitle="Наша команда"
          position="center"
        />
        <Carousel
          options={{ loop: true }}
          plugins={[autoPlay()]}
          className={styles.team__inner}
        >
          <CarouselSlides className="flex">
            {team.length > 0 &&
              team.map((item) => (
                <CarouselItem key={item.id} className={styles.team__item}>
                  <TeamItem item={item} />
                </CarouselItem>
              ))}
          </CarouselSlides>
          <CarouselControl className={styles.team__control}>
            <CarouselButtons className={styles.team__buttons}>
              <CarouselPrevButton className={styles.team__buttons__item} />
              <CarouselNextButton className={styles.team__buttons__item} />
            </CarouselButtons>
          </CarouselControl>
        </Carousel>
      </div>
    </section>
  );
}

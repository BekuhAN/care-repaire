import { ReactElement } from "react";
import styles from "./about.module.scss";
import clsx from "clsx";
import PageTitle from "../../components/page-title/page-title";
import Team from "../../components/team/team";
import Statistic from "../../components/statistic/statistic";
import Comments from "../../components/comments/comments";

export default function About(): ReactElement {
  return (
    <>
      <PageTitle title="О сервисе" />
      <main className={styles.about}>
        <div className={clsx(styles.about__inner, "container")}>
          <div className={styles.about__item}>
            <h2>ЛУЧШИЙ АВТОСЕРВИС В КРАСНОДАРЕ</h2>
            <p>
              Автосервис в Краснодаре Авто-Профи это не просто место, где
              проводят ремонт и техническое обслуживание автомобилей, прежде
              всего это сервис, где ваш автомобиль получает заботу на самом
              высоком уровне. С момента своего основания в 2008 году техцентр
              Авто-Профи стал надежным партнером качественного авторемонта,
              нацеленного на обеспечение безопасности и надежности вашего
              автомобиля. Авто-Профи Профессиональный Автосервис в Краснодаре,
              где ваш автомобиль в надежных руках.
            </p>
          </div>
          <div className={styles.about__item}>
            <h2>Качество на первом месте</h2>

            <p>
              Наша команда профессионалов гордится предоставлением услуг на
              современном уровне. Мы бережно и внимательно следим за каждой
              деталью, применяем передовые технологии и остаемся в курсе
              инноваций в автомобильной отрасли, чтобы ваш автомобиль получал
              лучшее обслуживание.
            </p>
          </div>
          <div className={styles.about__item}>
            <h2>Быстрый ремонт, максимальное удобство</h2>

            <p>
              Понимаем, что время ценный ресурс. Поэтому наши мастера работают
              оперативно, не забывая прежде всего о качестве. У нас вы можете
              быть уверены, что ремонт вашего автомобиля будет произведен в
              кратчайшие сроки без ущерба для его надежности.
            </p>
          </div>
          <div className={styles.about__item}>
            <h2>Запись клиентов простота и комфорт</h2>

            <p>
              Система записи в Авто-Профи разработана с мыслью о вашем комфорте.
              Наш опытный специалист примет ваш звонок, выслушает пожелания и
              назначит удобное время. Мы ценим уникальность каждого клиента,
              предоставляя индивидуальный сервис, где ваша запись забота о вас и
              вашем автомобиле. Мы ценим ваше доверие и готовы сделать все
              возможное, чтобы обеспечить вас первоклассным обслуживанием.
            </p>
          </div>
          <div className={styles.about__item}>
            <h2>Напоминания и Подтверждения - надежность в деталях</h2>

            <p>
              Сотрудники автосервиса Авто-Профи вам не дадут забыть о
              предстоящем визите. Мы в телефонном режиме напоминаем о записи,
              чтобы вы были уверены в том, что все организовано. Мы отправим вам
              СМС или позвоним, что бы напомнить о предстоящей записи.
            </p>
          </div>
          <div className={styles.about__item}>
            <h2>Гибкость и Адаптация:</h2>

            <p>
              Понимая, что планы могут меняться, мы стремимся быть гибкими.
              Поэтому в случае неожиданных обстоятельств просто сообщите нам, и
              мы постараемся найти оптимальное решение. Предложим перенести
              запись на другое время или даже день. Кроме того можем разбить
              ремонт поэтапно на разные даты.
            </p>
          </div>
          <div className={styles.about__item}>
            <h2>Доверие и уверенность гарантия качества</h2>

            <p>
              Прежде всего автосервис Авто-Профи место, где ваш автомобиль
              находится в руках профессионалов. Каждая деталь ремонта
              выполняется с особым вниманием и ответственностью. В Авто-Профи мы
              стремимся к тому, чтобы каждый клиент оставался довольным
              результатом нашей работы.
            </p>
          </div>
        </div>
        <Team />
        <Statistic />
        <Comments />
      </main>
    </>
  );
}

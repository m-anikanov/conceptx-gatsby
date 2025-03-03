import React from "react";

import * as styles from "./styles.module.scss";

export const Partners = () => {
  return (
    <section className={styles.partners} id="partners">
      <section className={styles.title}>Наши клиенты</section>
      <section className={styles.list}>
        <a
          href="https://anycars.rent/"
          className={styles.item}
          target="__blank"
          id="partners"
          
        >
          <img
            className={styles.partnerImg}
            src="/anycars-logo.webp"
            alt="Логотип партнера AnyCars"
            width={100}
          />
          <section className={styles.itemData}>
            <section className={styles.itemTitle}>AnyCars.rent</section>
            <section className={styles.itemDescription}>
              Доступная и надёжная аренда автомобилей
              <br />в Тбилиси и по всей Грузии.
            </section>
          </section>
        </a>
        <a
          href="https://elmos.tech"
          className={styles.item}
          target="__blank"
          id="partners"
        >
          <img
            className={styles.partnerImg}
            src="/elmos-logo.webp"
            alt="Логотип партнера Elmos.tech"
            width={100}
          />
          <section className={styles.itemData}>
            <section className={styles.itemTitle}>Elmos.tech</section>
            <section className={styles.itemDescription}>
            Пневматическое оборудование, а также разработка и производство систем автоматизации.
            </section>
          </section>
        </a>
      </section>
    </section>
  );
};

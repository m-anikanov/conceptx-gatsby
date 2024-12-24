import React from "react";

import * as styles from "./styles.module.scss";

export const Partners = () => {
  return (
    <section className={styles.partners} id="partners">
      <section className={styles.title}>Наши клиенты</section>
      <section className={styles.list}>
        <a
          href="https://livedrive.rent/ru/"
          className={styles.item}
          target="__blank"
          id="partners"
          
        >
          <img
            className={styles.partnerImg}
            src="/livedrive-logo.webp"
            alt="Логотип партнера LiveDrive"
            width={100}
          />
          <section className={styles.itemData}>
            <section className={styles.itemTitle}>LiveDrive</section>
            <section className={styles.itemDescription}>
              Доступная и надёжная аренда автомобилей
              <br />в Тбилиси и по всей Грузии.
            </section>
          </section>
        </a>
      </section>
    </section>
  );
};

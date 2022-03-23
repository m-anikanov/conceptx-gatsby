import React, {useMemo} from 'react';

import * as styles from './styles.module.scss';


export const Equipment = () => {
  return (
    <section className={styles.equipment}>
      <a className={styles.anchor} name="equipment"/>
      <section className={styles.title}>
        Оборудование&nbsp;<span className={styles.titleLogo}>2RDStudio</span>
      </section>
      <section className={styles.list}>
        <section className={styles.item}>
          <section className={styles.itemTitle}>
            Лазерно-гравировальный ЧПУ-станок
          </section>
          <section className={styles.itemBullets}>
            <section className={styles.bullet}>
              <span className={styles.bulletTitle}>Материалы</span>
              <span className={styles.bulletValue}>фанера, кожа, акрил, пластик, картон, пенопласт, ткань и другие</span>
            </section>
            <section className={styles.bullet}>
              <span className={styles.bulletTitle}>Рабочее поле</span>
              <span className={styles.bulletValue}>1300см x 900см</span>
            </section>
          </section>
          <section className={styles.itemDescription}>
            Позволяет разрезать материал насквозь или наносить рисунок. Можно изготавливать таблички, подставки, пазлы, арт-композиции, детали мебели
          </section>
        </section>
        <section className={styles.item}>
          <section className={styles.itemTitle}>
            3D-принтер
          </section>
          <section className={styles.itemBullets}>
            <section className={styles.bullet}>
              <span className={styles.bulletTitle}>Типы пластика</span>
              <span className={styles.bulletValue}>ABS, PET, Nylon, PLA , SBS</span>
            </section>
            <section className={styles.bullet}>
              <span className={styles.bulletTitle}>Рабочее поле</span>
              <span className={styles.bulletValue}>20см x 20см x 20см</span>
            </section>
          </section>
          <section className={styles.itemDescription}>
            Позволяет изготавливать различные пластиковые детали: крепления, заглушки, декоративные элементы, кнопки, фигурки, макеты, сувениры, формы для литья
          </section>
        </section>
        <section className={styles.item}>
          <section className={styles.itemTitle}>
            Фрезерный ЧПУ-станок
          </section>
          <section className={styles.itemBullets}>
            <section className={styles.bullet}>
              <span className={styles.bulletTitle}>Материалы</span>
              <span className={styles.bulletValue}>дерево, пластик, композиты, углеродистая сталь, мягкие металлы</span>
            </section>
            <section className={styles.bullet}>
              <span className={styles.bulletTitle}>Рабочее поле</span>
              <span className={styles.bulletValue}>2500см x 3000см</span>
            </section>
          </section>
          <section className={styles.itemDescription}>
            Позволяет изготавливать сложные, монолитные детали, делать гравировку, высокопрочные крепления, таблички, значки, медали
          </section>
        </section>
        <section className={styles.item}>
          <section className={styles.itemTitle}>
            УФ принтер
          </section>
          <section className={styles.itemBullets}>
            <section className={styles.bullet}>
              <span className={styles.bulletTitle}>Материалы</span>
              <span className={styles.bulletValue}>дерево, картон, ткань, пластик, металл</span>
            </section>
            <section className={styles.bullet}>
              <span className={styles.bulletTitle}>Рабочее поле</span>
              <span className={styles.bulletValue}>1300см x 1300см</span>
            </section>
          </section>
          <section className={styles.itemDescription}>
            С его помощью можно наносить влагостойкие изображения на практически любые поверхности
          </section>
        </section>
      </section>
    </section>
  );
}

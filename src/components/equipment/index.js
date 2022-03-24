import React from 'react';

import {COMPANY_NAME} from 'src/constants';

import * as styles from './styles.module.scss';


export const Equipment = () => {
  return (
    <section className={styles.equipment} id="equipment">
      <section className={styles.title}>
        Оборудование&nbsp;<span className={styles.titleLogo}>{COMPANY_NAME}</span>
      </section>
      <section className={styles.list}>
        <section className={styles.item}>
          <section className={styles.itemTitle}>
            Лазерно-гравировальный ЧПУ-станок
          </section>
          <section className={styles.itemBullets}>
            <section className={styles.bullet}>
              <span className={styles.bulletTitle}>Обрабатываемые материалы</span>
              <span className={styles.bulletValue}>нержавеющая сталь, цветные металлы, фанера, кожа, акрил, пластик, картон, пенопласт, ткань и другие</span>
            </section>
            <section className={styles.bullet}>
              <span className={styles.bulletTitle}>Рабочее поле</span>
              <span className={styles.bulletValue}>1300мм x 900мм</span>
            </section>
          </section>
          <section className={styles.itemDescription}>
            Дает возможность сделать раскрой материала или нанести рисунок. Позволяет изготовить таблички, подставки, арт-композиции, детали мебели, шкатулки, ящики, а также нанести гравировку
          </section>
        </section>
        <section className={styles.item}>
          <section className={styles.itemTitle}>
            3D-принтер
          </section>
          <section className={styles.itemBullets}>
            <section className={styles.bullet}>
              <span className={styles.bulletTitle}>Типы пластика</span>
              <span className={styles.bulletValue}>ABS, PET, Nylon, PLA, SBS и.т.д.</span>
            </section>
            <section className={styles.bullet}>
              <span className={styles.bulletTitle}>Рабочее поле</span>
              <span className={styles.bulletValue}>340мм х 240мм x 600мм</span>
            </section>
          </section>
          <section className={styles.itemDescription}>
            Позволяет изготавливать различные пластиковые детали: крепления, заглушки, декоративные элементы, кнопки, фигурки, макеты, сувениры
          </section>
        </section>
        <section className={styles.item}>
          <section className={styles.itemTitle}>
            Фрезерный ЧПУ-станок
          </section>
          <section className={styles.itemBullets}>
            <section className={styles.bullet}>
              <span className={styles.bulletTitle}>Обрабатываемые материалы</span>
              <span className={styles.bulletValue}>цветные металлы, дерево, пластик, композиты</span>
            </section>
            <section className={styles.bullet}>
              <span className={styles.bulletTitle}>Рабочее поле</span>
              <span className={styles.bulletValue}>
                <ul className={styles.ul}>
                  <li>Станок 1: 640мм x 840мм</li>
                  <li>Станок 2: 2500мм x 3000мм</li>
                </ul>
              </span>
            </section>
          </section>
          <section className={styles.itemDescription}>
            Позволяет изготавливать сложные детали из однородных материалов механическим методом и наносить гравировку.
          </section>
        </section>
        <section className={styles.item}>
          <section className={styles.itemTitle}>
            УФ принтер
          </section>
          <section className={styles.itemBullets}>
            <section className={styles.bullet}>
              <span className={styles.bulletTitle}>Обрабатываемые материалы</span>
              <span className={styles.bulletValue}>дерево, картон, ткань, пластик, металл</span>
            </section>
            <section className={styles.bullet}>
              <span className={styles.bulletTitle}>Рабочее поле</span>
              <span className={styles.bulletValue}>300мм x 500мм</span>
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

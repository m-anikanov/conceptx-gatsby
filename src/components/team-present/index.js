import React from 'react';
import cn from 'classnames';

import { Contacts } from '../../constants';

import personRoman from './assets/peson-roman.png';
import personDmitry from './assets/person-dmitry.png';

import * as styles from './styles.module.scss';

const Person = ({href, img, name, position}) => (
  <a href={href} target="_blank" rel="noreferrer" alt={name} className={styles.person}>
    <img className={styles.personImg} src={img} alt={name}/>
    <section className={styles.personInfo}>
      <span className={styles.personName}>{name}</span>
      <span className={styles.personPosition}>{position}</span>
    </section>
  </a>
)

export const TeamPresent = ({className}) => {
  return (
    <section className={cn(styles.block, className)}>
      <h3 className={styles.title}>
        Мы — профессиональная мастерская с большим опытом в изготовлении изделий из дерева, пластика и металла под заказ
      </h3>
      <p>
        Современное оборудование для лазерной резки, гравировки, фрезеровки и 3D-печати обеспечивает высокое качество и точность каждого изделия, гарантируя отличный результат.
      </p>
      <section className={styles.team}>
        <Person href={Contacts.ROMAN.vk} name="Роман" position="Директор" img={personRoman}/>
        <Person href={Contacts.DMITRY.vk} name="Дмитрий" position="Инженер" img={personDmitry}/>
      </section>
    </section>
  );
}

import React from "react";
import cn from 'classnames';

import {Contacts, Routes} from '/src/constants';
import {Phone} from '../phone';

import * as styles from './styles.module.scss';

const MENU_ITEMS_ORDER = [
  Routes.ABOUT_US,
  Routes.SPEC,
  Routes.PRICE,
];

export const Header = ({location}) => {
  return (
    <section className={styles.header}>
      <a href={Routes.ABOUT_US.route}>
        <section className={styles.logo} />
      </a>
      <menu className={styles.menu}>
        {MENU_ITEMS_ORDER.map((item, i) => (
          <a
            className={cn(styles.menuItem, {[styles.menuItemCurrent]: location.pathname === item.route})}
            href={item.route}
            key={item.route}
          >
            {item.text}
          </a>
        ))}
      </menu>
      <section className={styles.phones}>
        <Phone phone={Contacts.ROMAN.phone} label="Роман"/>
        <Phone phone={Contacts.DMITRY.phone} label="Дмитрий"/>
      </section>
    </section>
  );
}

import React, { useRef } from 'react';
import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhone} from '@fortawesome/free-solid-svg-icons';

import {Contacts, Routes} from 'src/constants';
import {useBooleanState} from 'src/hooks/use-boolean-state';
import {useOutsideClick} from 'src/hooks/use-outside-click';
import {Phone} from 'src/components/phone';

import * as styles from './styles.module.scss';

const MENU_ITEMS_ORDER = [
  Routes.ABOUT_US,
  Routes.SPEC,
  Routes.PRICE,
];

export const Header = ({location}) => {
  const phonesRef = useRef(null);

  const [phonesVisible, setPhonesVisible, setPhonesHidden] = useBooleanState(false);

  useOutsideClick(phonesRef, setPhonesHidden);

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
      <section className={styles.phones} ref={phonesRef}>
        <section className={styles.phonesButton} onClick={setPhonesVisible}>
          <FontAwesomeIcon icon={faPhone}/>
        </section>
        <section className={cn(styles.phonesList, {[styles.visible]: phonesVisible})}>
          <Phone phone={Contacts.ROMAN.phone} label="Роман"/>
          <Phone phone={Contacts.DMITRY.phone} label="Дмитрий"/>
        </section>
      </section>
    </section>
  );
}

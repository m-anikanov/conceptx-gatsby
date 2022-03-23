import React from "react"

import {START_YEAR, COMPANY_NAME} from '/src/constants';

import * as styles from './styles.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCopyright} from '@fortawesome/free-solid-svg-icons';
import {Contacts} from '/src/constants';
import {faVk, faTelegram} from '@fortawesome/free-brands-svg-icons';

const currentYear = new Date().getFullYear();

export const Footer = () => {
  return (
    <section className={styles.footer}>
      <section className={styles.dark}>
        <section className={styles.darkSide}>
          <span className={styles.darkSideTitle}>Подписывайтесь на нас!</span>
          <span className={styles.darkSideText}>Мы делимся новостями и показываем примеры работ, которые выполняем для наших клиентов</span>
          <span className={styles.darkSideFooter}>
            <a className={styles.darkSideIcon} target="_blank" rel="noreferrer" href={Contacts.VK.src}>
              <FontAwesomeIcon icon={faVk}/>
            </a>
          </span>
        </section>
        <section className={styles.darkSide}>
          <span className={styles.darkSideTitle}>Пишите нам!</span>
          <span className={styles.darkSideText}>Если у вас есть вопрос или пожелание, мы будем рады ответить и постраемся решить любую вашу задачу</span>
          <span className={styles.darkSideFooter}>
            <a className={styles.darkSideIcon} href={Contacts.VK.src}><FontAwesomeIcon icon={faVk} /></a>
            <a className={styles.darkSideIcon} href={Contacts.DMITRY.tg}><FontAwesomeIcon icon={faTelegram} /></a>
          </span>
        </section>
      </section>
      <section className={styles.copyright}>
        <FontAwesomeIcon className={styles.copyrightIcon} icon={faCopyright} />
        <span className={styles.years}>{`${START_YEAR} - ${currentYear}`}</span>
        <span className={styles.company}>{COMPANY_NAME}</span>
      </section>
    </section>
  );
}

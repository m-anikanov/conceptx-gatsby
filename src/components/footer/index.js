import React from "react"

import {START_YEAR, COMPANY_NAME} from '/src/constants';

import * as styles from './styles.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCopyright} from '@fortawesome/free-solid-svg-icons';
import {faVk, faYoutube, faInstagram, faWhatsapp, faTelegram, faViber} from '@fortawesome/free-brands-svg-icons';

const currentYear = new Date().getFullYear();

export const Footer = () => {
  return (
    <section className={styles.footer}>
      <section className={styles.dark}>
        <section className={styles.darkSide}>
          <span className={styles.darkSideTitle}>Следите за нами</span>
          <span className={styles.darkSideText}>Мы – небольшая мастерская с большим опытом изготовления разнообразных изделий</span>
          <span className={styles.darkSideFooter}>
            <a className={styles.darkSideIcon} href={'/'}><FontAwesomeIcon icon={faVk} /></a>
            <a className={styles.darkSideIcon} href={'/'}><FontAwesomeIcon icon={faYoutube} /></a>
            <a className={styles.darkSideIcon} href={'/'}><FontAwesomeIcon icon={faInstagram} /></a>
          </span>
        </section>
        <section className={styles.darkSide}>
          <span className={styles.darkSideTitle}>Пишите нам</span>
          <span className={styles.darkSideText}>В нашем арсенале имеется оборудование, на котором мы готовы с максимальной точностью изготовить ваш заказ</span>
          <span className={styles.darkSideFooter}>
            <a className={styles.darkSideIcon} href={'/'}><FontAwesomeIcon icon={faVk} /></a>
            <a className={styles.darkSideIcon} href={'/'}><FontAwesomeIcon icon={faWhatsapp} /></a>
            <a className={styles.darkSideIcon} href={'/'}><FontAwesomeIcon icon={faTelegram} /></a>
            <a className={styles.darkSideIcon} href={'/'}><FontAwesomeIcon icon={faViber} /></a>
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

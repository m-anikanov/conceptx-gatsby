import React from "react"

import {COMPANY_NAME} from 'src/constants';
import {Picture} from 'src/components/picture';

import img from './assets/img.png';

import * as styles from './styles.module.scss';


export const EquipmentPresent = ({className}) => {
  return (
    <Picture className={className} url={img} blurHeight="45%" href="#equipment">
      <span className={styles.captionText}>
        <span>Оборудование</span>
        {' '}
        <span className={styles.company}>{COMPANY_NAME}</span>
      </span>
    </Picture>
  );
}

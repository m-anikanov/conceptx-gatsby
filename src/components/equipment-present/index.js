import React from 'react';

import {COMPANY_NAME} from 'src/constants';
import {Picture} from 'src/components/picture';

import {useEquipmentPresentStaticImg, getImgSrc} from 'src/hooks/use-equipment-present-static-img';

import * as styles from './styles.module.scss';


export const EquipmentPresent = ({className}) => {
  const img = useEquipmentPresentStaticImg();

  return (
    <Picture className={className} url={getImgSrc(img)} blurHeight="45%" href="#equipment">
      <span className={styles.captionText}>
        <span>Оборудование</span>
        {' '}
        <span className={styles.company}>{COMPANY_NAME}</span>
      </span>
    </Picture>
  );
}

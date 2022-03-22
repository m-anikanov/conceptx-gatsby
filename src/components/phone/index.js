import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { Bullet } from '../bullet';

import { formatPhone } from '/src/utils';

import * as styles from './styles.module.scss';

export const Phone = ({phone, label}) => (
  <Bullet href={`tel:${phone}`} icon={faMobileAlt}>
    {label && <span className={styles.phoneLabel}>{label}</span>}
    <span className={styles.phoneNumber}>{formatPhone(phone)}</span>
  </Bullet>
);
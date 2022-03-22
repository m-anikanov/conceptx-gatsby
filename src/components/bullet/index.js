import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import * as styles from './styles.module.scss';

export const Bullet = ({icon, href, children}) => (
  <a className={styles.bullet} href={href}>
    {icon && <FontAwesomeIcon className={styles.icon} icon={icon} />}
    <span className={styles.content}>{children}</span>
  </a>
);

import React from "react"
import cn from 'classnames';
import chunk from 'lodash/chunk';

import {SpecializationsList} from 'src/constants';

import * as styles from './styles.module.scss';

export const SpecializationsPresent = ({className, hrefPrefix = ''}) => {
  return (
    <section className={cn(styles.block, className)}>
      {chunk(SpecializationsList, 3).map((chunk) => (
        <section className={styles.itemGroup}>
          {chunk.map(({name, color, caption, anchor}) => (
            <a href={`${hrefPrefix}#${anchor}`} className={styles.item} style={{background: color}}>
              <span className={styles.itemName}>{name}</span>
              <span className={styles.itemCaption}>{caption}</span>
            </a>
          ))}
        </section>
      ))}
    </section>
  );
}

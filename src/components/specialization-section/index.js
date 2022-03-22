/* global VK */
import React from 'react';

import {Picture} from 'src/components/picture';

import * as styles from './styles.module.scss';


const SpecializationSection = ({children, title, caption, image = [], anchor}) => {
  const images = image && !Array.isArray(image) ? [image] : image;

  return (
    <>
      <section className={styles.block}>
      {anchor && <a className={styles.anchor} name={anchor}/>}
        <section className={styles.columns}>
          <section className={styles.left}>
            <section className={styles.title}>
              <span className={styles.titleText}>{title}</span>
              {caption && <span className={styles.captionText}>{caption}</span>}
            </section>
          </section>
          <section className={styles.content}>
            {children}
          </section>
          <section className={styles.right}>
            {images.map((url) => (
              <Picture className={styles.picture} url={url}/>
            ))}
          </section>
        </section>
      </section>
    </>
  )
};

export {
  SpecializationSection
};

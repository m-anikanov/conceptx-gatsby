/* global VK */
import React from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

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
            {images.map((img) => (
              <GatsbyImage 
                className={styles.picture}
                image={getImage(img)}
                placeholder="dominantColor"
                loading="lazy"
                layout="fixed"/>
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

import React from 'react';
import cn from 'classnames';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import * as styles from './styles.module.scss';


export const Picture = ({className, url, children, blurHeight, href}) => {
  const blurringBackground = blurHeight ? (
    <section className={styles.overlay} style={{backgroundImage: `url(${url})`}}>
      <section className={styles.blur} />
    </section>
  ) : null;

  const content = (
    <>
      <section className={styles.picture} style={{backgroundImage: `url(${url})`}}>
        {blurringBackground}
      </section>
      <section className={styles.content}>
        {children}
      </section>
    </>
  );

  const blockClass = cn(styles.block, className);

  return href
    ? <AnchorLink className={blockClass} href={href}>{content}</AnchorLink>
    : <section className={blockClass}>{content}</section>;
}

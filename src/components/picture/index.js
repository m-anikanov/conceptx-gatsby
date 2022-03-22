import React from "react"
import cn from 'classnames';

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
    ? <a className={blockClass} href={href}>{content}</a>
    : <section className={blockClass}>{content}</section>;
}

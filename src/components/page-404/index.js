/* global VK */
import React from 'react';
import { Link } from "gatsby"

import * as styles from './styles.module.scss';

const Page404 = () => {
  return (
    <main className={styles.page}>
      <title>Not found</title>
      <br />
      <br />
      <h1 className={styles.heading}>Страница не найдена</h1>
      <p className={styles.paragraph}>
        Извините{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        <br />        
        <br />
        Запрашиваемая страница не найдена.
      </p>
    </main>
  )
};

export {
  Page404
};

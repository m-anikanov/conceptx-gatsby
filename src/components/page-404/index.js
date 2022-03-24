import React from 'react';

import {VkWidget} from 'src/components/vk-widget';

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

      <VkWidget />
    </main>
  )
};

export {
  Page404
};

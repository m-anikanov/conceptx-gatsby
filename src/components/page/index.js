import React from 'react';
import {YandexMetrika} from 'yandex-metrika-react';

import {YA_METRIKA} from 'src/constants';
import {Header} from 'src/components/header';
import {Footer} from 'src/components/footer';

import * as styles from './styles.module.scss';

export const Page = ({children, location}) => {
  return (
    <YandexMetrika
      counterId={YA_METRIKA}
      options={{
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true,
        triggerEvent: true,
      }}
    >
      <main className={styles.page}>
        <Header location={location}/>
        {children}
        <Footer/>
      </main>
    </YandexMetrika>
  );
}

export const asPage = (Component) => {
  return (props) => {
    const {location} = props;

    return (
      <Page location={location}>
        <Component {...props} />
      </Page>
    );
  }
}

import React from 'react';

import {Header} from '../header';
import {Footer} from '../footer';

import * as styles from './styles.module.scss';

export const Page = ({children, location}) => {
  return (
    <main className={styles.page}>
      <Header location={location}/>
      {children}
      <Footer/>
    </main>
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

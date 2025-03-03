import React from 'react';

import {faClock, faLocationDot} from '@fortawesome/free-solid-svg-icons'

import {VkWidget} from 'src/components/vk-widget';
import {Contacts} from 'src/constants';
import {Phone} from 'src/components/phone';
import {Map} from 'src/components/map';
import {Bullet} from 'src/components/bullet';

import * as styles from './styles.module.scss';

const PageContacts = () => {
  return (
    <section className={styles.contacts}>
        <section className={styles.contactItem}>
          <section className={styles.contactItemTitle}>Мастерская</section>
          <Map 
            className={styles.contactItemMap}
            clickable 
            width="400" 
            height="250"
            lat={Contacts.MANUFACTURE.coords.lat} 
            lon={Contacts.MANUFACTURE.coords.lon} 
            link={Contacts.MANUFACTURE.link}
            zoom={13}/>
          <section className={styles.contactItemInfo}>
            <Bullet icon={faLocationDot}>
              {Contacts.MANUFACTURE.address}
            </Bullet>
          </section>
          <section className={styles.contactItemInfo}>
            <Phone phone={Contacts.MANUFACTURE.phone1}/>
            <Phone phone={Contacts.MANUFACTURE.phone2}/>
          </section>
        </section>
        <VkWidget/>
    </section>
  )
};

export {
  PageContacts
};

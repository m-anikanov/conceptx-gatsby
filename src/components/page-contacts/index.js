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
          <section className={styles.contactItemTitle}>
            Пункт выдачи в г. Щелково
          </section>
          <Map 
            className={styles.contactItemMap}
            clickable 
            width="400" 
            height="250"
            lat={Contacts.PV_SHCHELK.coords.lat} 
            lon={Contacts.PV_SHCHELK.coords.lon} 
            zoom={13}/>
          <section className={styles.contactItemInfo}>
            <Bullet icon={faLocationDot}>
              {Contacts.PV_SHCHELK.address}
            </Bullet>
          </section>
          <section className={styles.contactItemInfo}>
            <Phone phone={Contacts.PV_SHCHELK.phone}/>
          </section>
          <section className={styles.contactItemInfo}>
            <Bullet icon={faClock}>
              {Contacts.PV_SHCHELK.time}
            </Bullet>
          </section>
        </section>
        <section className={styles.contactItem}>
          <section className={styles.contactItemTitle}>Пункт выдачи в г. Королев</section>
          <Map 
            className={styles.contactItemMap}
            clickable 
            width="400" 
            height="250"
            lat={Contacts.PV_KOR.coords.lat} 
            lon={Contacts.PV_KOR.coords.lon} 
            zoom={13}/>
          <section className={styles.contactItemInfo}>
            <Bullet icon={faLocationDot}>
              {Contacts.PV_KOR.address}
            </Bullet>
          </section>
          <section className={styles.contactItemInfo}>
            <Phone phone={Contacts.PV_KOR.phone}/>
          </section>
          <section className={styles.contactItemInfo}>
            <Bullet icon={faClock}>
              {Contacts.PV_KOR.time}
            </Bullet>
          </section>
        </section>
        <section className={styles.contactItem}>
          <section className={styles.contactItemTitle}>Производство</section>
          <Map 
            className={styles.contactItemMap}
            clickable 
            width="400" 
            height="250"
            lat={Contacts.MANUFACTURE.coords.lat} 
            lon={Contacts.MANUFACTURE.coords.lon} 
            zoom={13}/>
          <section className={styles.contactItemInfo}>
            <Bullet icon={faLocationDot}>
              {Contacts.MANUFACTURE.address}
            </Bullet>
          </section>
          <section className={styles.contactItemInfo}>
            <Phone phone={Contacts.MANUFACTURE.phone}/>
          </section>
        </section>
        <VkWidget/>
    </section>
  )
};

export {
  PageContacts
};

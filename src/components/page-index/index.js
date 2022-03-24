import React from 'react';
import {VkWidget} from 'src/components/vk-widget';
import {TeamPresent} from 'src/components/team-present';
import {EquipmentPresent} from 'src/components/equipment-present';
import {SpecializationsPresent} from 'src/components/specializations-present';
import {Routes} from '/src/constants';
import {Portfolio} from '/src/components/portfolio';
import {Equipment} from '/src/components/equipment';

import * as styles from './styles.module.scss';

const PageIndex = () => {
  return (
    <>
      <section className={styles.presentationArea}>
        <TeamPresent className={styles.presentationBlock} />
        <EquipmentPresent className={styles.presentationBlock} />
      </section>

      <SpecializationsPresent className={styles.specializationsArea} hrefPrefix={Routes.SPEC.route} />

      <Portfolio />

      <Equipment />

      <VkWidget />
    </>
  )
};

export {
  PageIndex
};

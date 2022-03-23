/* global VK */
import React, {useState, useCallback} from 'react';
import {Script} from 'src/components/script';
import {TeamPresent} from 'src/components/team-present';
import {EquipmentPresent} from 'src/components/equipment-present';
import {SpecializationsPresent} from 'src/components/specializations-present';
import {Routes} from '/src/constants';
import {Portfolio} from '/src/components/portfolio';
import {Equipment} from '/src/components/equipment';

import * as styles from './styles.module.scss';

const PageIndex = () => {
  const onVkReady = useCallback(() => {
    VK.Widgets.CommunityMessages(
      "vk_community_messages",
      174147669,
      {expanded: "0",disableExpandChatSound: "1",disableNewMessagesSound: "1",tooltipButtonText: "Есть вопрос?"},
    );
  }, []);

  return (
    <>
      <section className={styles.presentationArea}>
        <TeamPresent className={styles.presentationBlock} />
        <EquipmentPresent className={styles.presentationBlock} />
      </section>

      <SpecializationsPresent className={styles.specializationsArea} hrefPrefix={Routes.SPEC.route} />

      <Portfolio />

      <Equipment />

      {false && <Script src="https://vk.com/js/api/openapi.js?169" onReady={onVkReady}/>}

      <div id="vk_community_messages"/>
    </>
  )
};

export {
  PageIndex
};

/* global VK */
import React, {useCallback} from 'react';
import {Script} from 'src/components/script';
import {Contacts} from 'src/constants';

const VkWidget = () => {
  const onVkReady = useCallback(() => {
    VK.Widgets.CommunityMessages(
      "vk_community_messages",
      Contacts.VK.id,
      {
        expanded: "0", 
        disableExpandChatSound: "1", 
        disableNewMessagesSound: "1", 
        tooltipButtonText: "Хотите задать вопрос?",
      },
    );
  }, []);

  return (
    <>
      <Script src="https://vk.com/js/api/openapi.js?169" onReady={onVkReady}/>

      <div id="vk_community_messages"/>
    </>
  )
};

export {
  VkWidget
};

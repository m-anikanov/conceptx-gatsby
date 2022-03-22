import React from 'react';

import {asPage} from '/src/components/page';
import {PageContacts} from 'src/components/page-contacts';

const ContactsPage = () => {
  return (
    <PageContacts/>
  );
}

export default asPage(ContactsPage);

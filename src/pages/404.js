import * as React from "react"

import {Page404} from '/src/components/page-404';
import {asPage} from '/src/components/page';

const NotFoundPage = () => {
  return (
    <Page404/>
  )
}

export default asPage(NotFoundPage);

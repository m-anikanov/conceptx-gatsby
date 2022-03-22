import React, {useCallback} from "react"
import {Helmet} from "react-helmet";

export const Script = ({src, onReady}) => {
  const handleChangeClientState = useCallback((newState, addedTags) => {
    if (addedTags && addedTags.scriptTags) {
      const foundScript = addedTags.scriptTags.find((scriptTag) => scriptTag.src === src)
      if (foundScript) {
        foundScript.addEventListener('load', onReady, { once: true })
      }
    }
  }, [src, onReady]);

  return <>
    <Helmet onChangeClientState={handleChangeClientState}>
      {window && src && <script async defer src={src} />}
    </Helmet>
  </>
}

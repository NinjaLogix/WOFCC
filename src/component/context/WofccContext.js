import React, {useState, createContext} from 'react'
import {
  client,
  queryData,
  listenToQuery,
  stopListeningToQuery} from '../api/Sanity'

const WofccContext = createContext([{}, () => {}]);

const WofccProvider = ({children}) => {
  const [state, setState] = useState({
    singleton: client,
    location: undefined,
    sanity_query: queryData,
    sanity_listen: listenToQuery,
    sanity_unListen: stopListeningToQuery
  });

  return (
    <WofccContext.Provider value={[state, setState]}>
      {children}
    </WofccContext.Provider>
  )
}

export {
  WofccContext,
  WofccProvider
}
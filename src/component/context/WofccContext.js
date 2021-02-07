import React, { useState, useEffect, createContext } from 'react';
import {
  client,
  queryData,
  listenToQuery,
  stopListeningToQuery,
} from '../api/Sanity';
import { config } from '../../config/config';

const WofccContext = createContext([{}, () => {}]);

const WofccProvider = ({ children }) => {
  const [state, setState] = useState({
    singleton: client,
    location: undefined,
    sanity_query: queryData,
    sanity_listen: listenToQuery,
    sanity_unListen: stopListeningToQuery,
  });

  useEffect(() => {
    queryData(client, {
      query: config.sanity_queries.locations,
    })
      .then(response => {
        if (!!response) {
          const [location_data] = response;

          setState({ ...state, location: location_data });
        }
      })
      .catch();
  }, []);

  return (
    <WofccContext.Provider value={[state, setState]}>
      {children}
    </WofccContext.Provider>
  );
};

export { WofccContext, WofccProvider };

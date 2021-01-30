import React, { useContext, useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import { Boxed } from './style/InfoConfStyle';
import moment from 'moment';
import { WofccContext } from '../context/WofccContext';
import { config } from '../../config/config';
import { Slides } from '../carousel/Slides';
import { StyledA } from './style/InfoStyle';

export const InfoConf = () => {
  const [api] = useContext(WofccContext);

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const getNotes = async () => {
      const all = await api.sanity_query(api.singleton, {
        query: config.sanity_queries.side_notes,
      });

      setNotes(
        all
          .filter(e => moment().isBefore(moment(e.ts_exp)))
          .map((e, index) => ({
            view: e.url ? (
              <StyledA key={index} target={'_blank'} href={e.url}>
                <Typography align={'center'} variant={'h3'}>
                  {e.msg}
                </Typography>
              </StyledA>
            ) : (
              <Typography key={index} align={'center'} variant={'h3'}>
                {e.msg}
              </Typography>
            ),
          })),
      );
    };

    getNotes();
  }, []);

  return (
    <Boxed>
      <Slides
        useNavigation={false}
        entries={notes}
      />
    </Boxed>
  );
};

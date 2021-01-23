/* eslint-disable array-callback-return */
import React, { useContext, useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import { Wrapper, InfoPaper } from './style/InfoConfStyle';
import moment from 'moment';
import { WofccContext } from '../context/WofccContext';
import { config } from '../../config/config';

export const InfoConf = () => {
  const [api] = useContext(WofccContext);

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const getNotes = async () => {
      const all = api.sanity_query(api.singleton, {
        query: config.sanity_queries.side_notes,
      });

      console.log('all', all);
    };

    getNotes();
  }, []);

  return (
    <div>
      {notes.map((note, index) => {
        if (!note.ts_exp || moment().isBefore(note.ts_exp))
          return (
            <a
              key={index}
              target='_blank'
              href={note.url | '#'}
            >
              <Wrapper>
                <InfoPaper>
                  <Typography align={'center'} variant={'h3'}>
                    {note.msg}
                  </Typography>
                </InfoPaper>
              </Wrapper>
            </a>
          );
      })}
    </div>
  );
};

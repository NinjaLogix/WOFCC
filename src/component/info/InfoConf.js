import React from 'react';
import { Typography } from '@material-ui/core';
import {
  Wrapper,
  InfoPaper
} from './InfoConfStyle';
import moment from 'moment';

export const InfoConf = ({ notes }) => {
  return (
    <div>
      {notes.map(note => {
        if (!note.ts_exp || moment().isBefore(note.ts_exp))
          return (
            <a target='_blank' href={notes[0].url ? notes[0].url : '#'}>
              <Wrapper>
                <InfoPaper>
                  <Typography align={'center'} variant={'h1'} component={'h3'}>
                    {notes[0].msg}
                  </Typography>
                </InfoPaper>
              </Wrapper>
            </a>
          );
      })}
    </div>
  );
};
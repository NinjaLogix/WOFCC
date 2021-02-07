import React from 'react';
import {
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from '@material-ui/core';
import { TitleWrapper, StyledDialog } from './style/InfoStyle';

export const InfoModal = ({ open, setOpen, title, text, img }) => {
  return (
    <div>
      <StyledDialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>
          <TitleWrapper>
            <Typography variant={'h2'} gutterBottom>
              {title}
            </Typography>
          </TitleWrapper>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography variant={'body1'} color={'textPrimary'}>
              {text}
            </Typography>
          </DialogContentText>
        </DialogContent>
      </StyledDialog>
    </div>
  );
};

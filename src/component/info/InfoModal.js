import React from 'react';
import {DialogContent, DialogContentText, DialogTitle, Typography} from '@material-ui/core';
import {TitleWrapper, StyledDialog} from './InfoStyle';


export const InfoModal = ({open, setOpen, title, text, img}) => {

    return (
        <div>
            <StyledDialog
                open={open}
                onClose={()=>setOpen(false)}>
                    <DialogTitle>
                        <TitleWrapper>
                            <Typography variant={'h2'} component={'h2'} gutterBottom>{title}</Typography>
                        </TitleWrapper>
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <Typography variant={'subtitle1'} component={'h4'} dangerouslySetInnerHTML={{__html: text}}/>
                        </DialogContentText>
                    </DialogContent>
            </StyledDialog>
        </div>
    )
};
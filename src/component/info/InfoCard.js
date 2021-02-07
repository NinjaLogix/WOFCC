import React, { useState } from 'react';
import { InfoWrapper, ImgSection, TextSection } from './style/InfoStyle';
import { InfoModal } from './InfoModal';
import { config } from '../../config/config';
import { Typography } from '@material-ui/core';

//todo -> mobile:if the text is too long it doesn't scale correctly
export const InfoCard = ({ src, title, text, detail }) => {
  console.log('text', text, detail);

  const text_limit = 200;
  const [useExpanded] = useState(text.length >= text_limit);
  const [open, setOpen] = useState(false);

  const concatText = text => `${text.substring(0, text_limit)}....`;

  const handleClick = e => setOpen(!open);

  const allowDetail = () => {
    if (config.isMobile || useExpanded) {
      return (
        <InfoModal
          open={open}
          setOpen={setOpen}
          title={title}
          text={detail ? detail : text}
          img={src}
        />
      );
    }
  };

  return (
    <InfoWrapper
      elevation={3}
      onClick={handleClick}
      expanded={useExpanded}
      mobile={config.isMobile}
    >
      {allowDetail()}

      <ImgSection src={src} />

      <TextSection>
        <Typography variant={'h3'}>{title}</Typography>

        {!config.isMobile && (
          <Typography variant={'body1'}>
            {useExpanded ? concatText(text) : text}
          </Typography>
        )}
      </TextSection>
    </InfoWrapper>
  );
};

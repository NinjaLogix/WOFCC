import React, { useState } from 'react';
import uuidv1 from 'uuid';
import { Wrapper, CreditList, ListWrapper } from './style/CreditsStyle';

export const Credits = () => {
  const [freepik] = useState([
    {
      key: uuidv1(),
      img_desc: 'background',
      link_text: 'Designed by Kjpargeter / Freepik',
      link: 'http://www.freepik.com/kjpargeter',
    },
    {
      key: uuidv1(),
      img_desc: 'New Members Classes',
      link_text: 'Designed by ijeab / Freepik',
      link: 'http://www.freepik.com/ijeab',
    },
    {
      key: uuidv1(),
      img_desc: 'Childrens Ministry',
      link_text: 'Designed by brgfx / Freepik',
      link: 'http://www.freepik.com/brgfx',
    },
    {
      key: uuidv1(),
      img_desc: 'Worship Service',
      link_text: 'Designed by onlyyouqj / Freepik',
      link: 'http://www.freepik.com/onlyyouqj',
    },
    {
      key: uuidv1(),
      img_desc: 'Corporate Confession',
      link_text: 'Designed by ijeab / Freepik',
      link: 'http://www.freepik.com/ijeab',
    },
    {
      key: uuidv1(),
      img_desc: 'background',
      link_text: 'Designed by Bedneyimages / Freepik',
      link: 'http://www.freepik.com/bedneyimages',
    },
    {
      key: uuidv1(),
      img_desc: 'Pastoral Care',
      link_text: 'Designed by ijeab / Freepik',
      link: 'http://www.freepik.com/ijeab',
    },
    {
      key: uuidv1(),
      img_desc: 'green_background',
      link_text: 'Designed by Freepik',
      link: 'http://www.freepik.com/',
    },
    {
      key: uuidv1(),
      img_desc: 'background',
      link_text: 'Designed by GarryKillian / Freepik',
      link: 'http://www.freepik.com/GarryKillian',
    },
    {
      key: uuidv1(),
      img_desc: 'Children’s Ministry',
      link_text: 'Designed by brgfx / Freepik',
      link: 'http://www.freepik.com/brgfx',
    },
    {
      key: uuidv1(),
      img_desc: 'Media Ministry',
      link_text: 'Designed by jcomp / Freepik',
      link: 'http://www.freepik.com/jcomp',
    },
    {
      key: uuidv1(),
      img_desc: 'Hospitality',
      link_text: 'Designed by Mrsiraphol / Freepik',
      link: 'http://www.freepik.com/Mrsiraphol',
    },
    {
      key: uuidv1(),
      img_desc: 'Couples in covenant',
      link_text: 'Designed by Freepic.diller / Freepik',
      link: 'http://www.freepik.com/Freepic.diller',
    },
    {
      key: uuidv1(),
      img_desc: 'Youth Ministry',
      link_text: 'Designed by Kjpargeter / Freepik',
      link: 'http://www.freepik.com/kjpargeter',
    },
    {
      key: uuidv1(),
      img_desc: 'Greeters',
      link_text: 'Designed by Freepik',
      link: 'http://www.freepik.com/',
    },
    {
      key: uuidv1(),
      img_desc: 'bridge connectors',
      link_text: 'Designed by Vectorarte / Freepik',
      link: 'http://www.freepik.com/Vectorarte',
    },
    {
      key: uuidv1(),
      img_desc: 'free worshipers',
      link_text: 'Designed by kjpargeter / Freepik',
      link: 'http://www.freepik.com/kjpargeter',
    },
    {
      key: uuidv1(),
      img_desc: 'background',
      link_text: 'Designed by Kjpargeter / Freepik',
      link: 'http://www.freepik.com/kjpargeter',
    },
    {
      key: uuidv1(),
      img_desc: 'Ben White',
      link_text: 'Ben White',
      link:
        'https://unsplash.com/@benwhitephotography?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge',
    },
    {
      key: uuidv1(),
      img_desc: 'Priscilla Du Preez',
      link_text: 'Priscilla Du Preez',
      link:
        'https://unsplash.com/@priscilladupreez?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge',
    },
    {
      key: uuidv1(),
      img_desc: 'Nature Vectors by Vecteezy',
      link_text: 'Nature Vectors by Vecteezy',
      link: 'https://www.vecteezy.com/free-vector/nature',
    },
  ]);

  return (
    <Wrapper>
      <ListWrapper>
        <CreditList>
          {freepik.map((pik, index) => (
            <li key={index}>
              <a target='_blank' href={pik.link}>
                {pik.img_desc} Images {pik.link_text}
              </a>
            </li>
          ))}
        </CreditList>
      </ListWrapper>
    </Wrapper>
  );
};

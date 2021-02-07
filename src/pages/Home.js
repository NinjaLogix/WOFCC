import React, { useEffect, useState, useContext } from 'react';
import { WofccContext } from '../component/context/WofccContext';
import { Wrapper, Media, SlideImage, Slide } from './style/HomeStyle';
import { WelcomeInfo } from '../component/info/WelcomeInfo';
import { config } from '../config/config';
import moment from 'moment';
import { Slides } from '../component/carousel/Slides';
import { Typography } from '@material-ui/core';

export const Home = () => {
  const [api] = useContext(WofccContext);

  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const getSlides = async () => {
      const slides = await api.sanity_query(api.singleton, {
        query: config.sanity_queries.carousel,
      });

      if (Array.isArray(slides)) {
        const valid = slides.filter(
          e =>
            moment().isBetween(
              moment(e.start_date),
              moment(e.end_date),
              undefined,
              '[]',
            ) || e.runYearly,
        );

        const all = [];

        valid.forEach(v => {
          all.push(
            ...v.entries.map(f => ({
              ts: f._createdAt,
              view: (
                <Slide>
                  <SlideImage src={f.url} alt={f.description} />
                </Slide>
              ),
              description: f.description,
              type: 'image',
              url: f.url,
            })),
          );
        });

        setEntries(all);
      }
    };

    getSlides();
  }, []);

  return (
    <Wrapper>
      <Media>
        {!config.isMobile && (
          <Typography variant={'h2'}>
            Word of Faith Southaven
          </Typography>
        )}

        <section id={'slides-box'}>
          <Slides effect={'fade'} entries={entries} />
        </section>
      </Media>

      <WelcomeInfo />
    </Wrapper>
  );
};

import React, { useContext, useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import { Boxed, CarouselBody } from './style/InfoConfStyle';
import moment from 'moment';
import { WofccContext } from '../context/WofccContext';
import { config } from '../../config/config';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const InfoConf = () => {
  const [api] = useContext(WofccContext);

  const [notes, setNotes] = useState([]);
  const [settings] = useState({
    swipeToSlide: true,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  });

  useEffect(() => {
    const getNotes = async () => {
      const all = await api.sanity_query(api.singleton, {
        query: config.sanity_queries.side_notes,
      });

      setNotes(all.filter(e => moment().isBefore(moment(e.ts_exp))));
    };

    getNotes();
  }, []);

  return (
    <Boxed>
      <CarouselBody>
      <Slider {...settings}>
        {notes.map((e, index) => {
          if (!!e.url)
            return (
              <a key={index} target={'_blank'} href={e.url}>
                <Typography align={'center'} variant={'h3'} href={e.url}>
                  {e.msg}
                </Typography>
              </a>
            )
          else
            return (
              <Typography key={index} align={'center'} variant={'h3'}>
                {e.msg}
              </Typography>
            )
        })}
      </Slider>
      </CarouselBody>
    </Boxed>
  );
};


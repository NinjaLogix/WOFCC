import React, { useState, useEffect, useContext } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import moment from 'moment';
import { Wrapper } from './style/CarouselStyle';
import { WofccContext } from '../context/WofccContext';
import { config } from '../../config/config';

//todo -> make a new carousel component that's reusable
export const Carousel = ({type}) => {
  const [api] = useContext(WofccContext);

  const [entries, setEntries] = useState([]);
  const [settings] = useState({
    swipeToSlide: true,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  });

  useEffect(() => {
    const getSlides = async () => {
      const slides = await api.sanity_query(api.singleton, {
        query: config.sanity_queries.carousel,
      });

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
            ts_crt: f._createdAt,
            description: f.description,
            url: f.url,
          })),
        );
      });

      setEntries(all);
    };

    getSlides();
  }, []);

  return (
    <Wrapper id={'carousel'}>
      <Slider {...settings}>
        {entries.map(entry => (
          <img id={'slick_image'} key={entry.description} alt={'840x400'} src={entry.url} />
        ))}
      </Slider>
    </Wrapper>
  );
};

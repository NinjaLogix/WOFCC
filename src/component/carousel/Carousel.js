import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import moment from 'moment';
import { Wrapper } from './style/CarouselStyle';

export const Carousel = ({ playlists }) => {
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
    let all_slides = [];

    playlists.forEach(playlist => {
      if (
        moment().isBetween(
          moment(playlist.start_date),
          moment(playlist.end_date),
          undefined,
          '[]'
        ) ||
        playlist.runYearly
      )
        all_slides.push(
          ...playlist.entries.map(entry => ({
            ts_crt: playlist._createdAt,
            description: entry.description,
            url: entry.url,
          }))
        );
    });

    setEntries(all_slides);
  }, []);

  return (
    <Wrapper>
      <Slider {...settings}>
        {entries.map(entry => (
          <img key={entry.description} alt={'840x400'} src={entry.url} />
        ))}
      </Slider>
    </Wrapper>
  );
};

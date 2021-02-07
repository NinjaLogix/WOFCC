import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/effect-fade/effect-fade.min.css';

export const Slides = ({
  entries,
  getAsync,
  checkAsync,
  effect,
  useNavigation,
  visibleSlides,
  delay,
}) => {
  SwiperCore.use([
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay,
    EffectFade,
  ]);

  const [slides, setSlides] = useState([]);

  let settings = {
    navigation: useNavigation,
    effect,
    slidesPerView: visibleSlides,
    autoplay: { delay },
  };

  if (useNavigation)
    settings = { ...settings, pagination: { clickable: true } };

  useEffect(() => {
    const apiCall = async () => {
      const response = await getAsync();

      setSlides([...checkAsync(response)]);
    };

    if (!!getAsync && !!checkAsync) apiCall().catch();
    else setSlides(entries);
  }, [entries]);

  return (
    <Swiper {...settings}>
      {slides.map((e, index) => (
        <SwiperSlide key={index}>{e.view}</SwiperSlide>
      ))}
    </Swiper>
  );
};

Slides.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      view: PropTypes.node,
      ts: PropTypes.string,
      description: PropTypes.string,
      type: PropTypes.oneOf(['image', 'text']),
      url: PropTypes.string,
    }),
  ),
  getAsync: PropTypes.func,
  checkAsync: PropTypes.func,
  visibleSlides: PropTypes.number,
  delay: PropTypes.number,
};

Slides.defaultProps = {
  visibleSlides: 1,
  useNavigation: true,
  effect: 'slide',
  entries: [],
  delay: 4500,
};

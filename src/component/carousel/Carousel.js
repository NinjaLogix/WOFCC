import React, {useState, useEffect} from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import moment from 'moment'
import {Wrapper} from './CarouselStyle'

export const Carousel = ({playlists}) => {
    const [entries, setEntries] = useState([]);
    const [settings] = useState({
            swipeToSlide: true,
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            pauseOnHover: true
        });

    useEffect(() => {
        playlists.forEach(playlist => {
          if (playlist.runYearly)
            setEntries([...entries, ...playlist.entries.map(entry => entry)])
          else if (moment().isBetween(moment(playlist.start_date), moment(playlist.end_date), undefined, '[]'))
            setEntries([...entries, ...playlist.entries.map(entry => entry)])
        })
    }, [])
      
    return (
        <Wrapper>
            <Slider {...settings}>
                {entries.map(entry => <img key={entry.description} alt={'840x400'} src={entry.url}/>)}
            </Slider>
        </Wrapper>
    )
}
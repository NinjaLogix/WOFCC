import React, {useState, useEffect} from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {fixUrl} from '../../util'
import {dropBox} from '../../component/api';
import moment from 'moment';
import {ImageWrapper} from './CarouselStyle';

export const Carousel = function(props){
    const [slides, setSlides] = useState([]);
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

    const setupSlides = async () => {
        const responses = await dropBox.filesListFolder({path: process.env.REACT_APP_CAROUSEL_PATH});

        const files_needed = [];
        const finalized = [];
        const today = moment();

        // use moment to figure out which ones we need to show
        responses.entries.forEach(entry => {
            const file_name = entry.name.replace('.png', '').split('-');
            // console.log('filename', file_name)

            if (/^[0-9]{4}$/.test(file_name[1].trim())){
                // this image is a yearly image, if it fits in this year then show it
                if (today.year() === Number(file_name[1]))
                    files_needed.push(entry);
            }
            else {
                const startDate = moment(file_name[1]);
                const endDate = moment(file_name[2]);

                // we need to scan the date to see if today fits in the range of dates from the file name
                if (today.isAfter(startDate) && today.isBefore(endDate))
                    files_needed.push(entry);
            }
        })

        // finally we add the links to the state array to update the view
        for (const x of files_needed){
            const {links} = await dropBox.sharingListSharedLinks({path: x.path_display});

            // console.log('links', links.length)
            // console.log(links[0])

            if (links !== undefined)
                finalized.push(fixUrl(links[0].url));
            else
                console.warn(`File ${x.name} didn't have a shared link. Please go make one...`)
        }

        setSlides(finalized);
    }

    useEffect(() => {
        if (slides.length === 0)
            setupSlides();
    }, [])
      
    return (
        <div style={{textAlign: 'center'}}>
            <Slider {...settings}>
                {slides.map(image => (
                    <ImageWrapper>
                        <img alt={'840x400'} src={image}/>
                    </ImageWrapper>
                ))}
            </Slider>
        </div>
    )
}
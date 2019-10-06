import React from 'react';
import {Carousel} from 'react-bootstrap';
import {provideCarouselImages, fixUrl} from '../../util'
import {dropBox} from '../../component/api';
import {ALT_REGEX} from '../../script/appContext';
import {compareCarousel} from '../../util';

export default class WofccCarousel extends React.Component{
    constructor(){
        super();

        this.state = {
            slidesToShow: [],
            rawSlideData: []
        }
    }

    getData = async () => {
        const returnArr = [];
    
        const response = await dropBox.filesListFolder({path: process.env.REACT_APP_CAROUSEL_PATH})
    
        response.entries.forEach(async (fileName) => {
            const response2 = await dropBox.sharingListSharedLinks({path: fileName.path_display});
    
            const file = response2.links[0].name.substring(0, response2.links[0].name.indexOf('.'));
            const startDate = new Date(file.split('-')[1]);
            const endDate = new Date(file.split('-')[2]);
            const today = new Date();
    
            if ((today >= startDate && today < endDate) || (ALT_REGEX.test(file))) {
                this.setState({slidesToShow: [...this.state.slidesToShow, response2.links[0]]})
            }
        });
    }

    componentDidMount(){
        this.getData();
    }

    render(){
        const {slidesToShow} = this.state;

        return(
            <Carousel indicators={true} pauseOnHover={true} slide={true} wrap={true}>
                {slidesToShow.map((image, index) => {
                        console.log('image', image);
    
                        return(
                            <Carousel.Item key={index}>
                                <img alt={'840x400'} src={fixUrl(image.url)}/>
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
        )
    }
}
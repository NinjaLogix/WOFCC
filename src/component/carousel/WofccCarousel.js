import React from 'react';
import {Carousel} from 'react-bootstrap';
import {fixUrl} from '../../util'
import {dropBox} from '../../component/api';

export default class WofccCarousel extends React.Component{
    constructor(){
        super();

        this.ALT_REGEX = RegExp(process.env.REACT_APP_REGEX_ALT + new Date().getFullYear());

        this.state = {
            slidesToShow: [],
            rawSlideData: []
        }
    }

    getData = async () => {
        const response = await dropBox.filesListFolder({path: process.env.REACT_APP_CAROUSEL_PATH})
    
        response.entries.forEach(async (fileName) => {
            const response2 = await dropBox.sharingListSharedLinks({path: fileName.path_display});
            
            if (response2.links.length > 0){
                console.log(response2);

                const file = response2.links[0].name.substring(0, response2.links[0].name.indexOf('.'));
                const startDate = new Date(file.split('-')[1]);
                const endDate = new Date(file.split('-')[2]);
                const today = new Date();
        
                if ((today >= startDate && today < endDate) || (this.ALT_REGEX.test(file))) {
                    this.setState({slidesToShow: [...this.state.slidesToShow, response2.links[0]]})
                }
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
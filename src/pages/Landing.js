import React from 'react';
import { connect } from 'react-redux';
import { change_page } from "../redux-def/actions";
import { Carousel } from 'react-bootstrap';
import { /*FILE_REGEX, EXT_REGEX,*/ ALT_REGEX, dropBox, fixUrl } from '../script/appContext';
import '../style/wofcc_master.css';
import {SoundPlayer} from "../component";
import {compareCarousel} from "../util";

const mapDispatchToProps = dispatch =>{
  return{
      change_page: page => dispatch(change_page(page))
  };
};

class ConnectedLanding extends React.Component{
    constructor(){
      super();

      this.state = {
          page: '',
          displayUrl: []
      };
    };

    componentWillMount(){
        this.setState({page: 'landing'});
        this.props.change_page('landing');

        this.provideUrls();
    };

    async provideUrls(){
        let returnArr = [];

        let response = await dropBox.filesListFolder({path: process.env.REACT_APP_CAROUSEL_PATH});

        //Automatically create shared links for everything in the carousel dir, leaving this commented out
        //incase I need it in the future and don't need to dig through revision history
        /*
        response.entries.forEach(fileName => {
            let extIndex = fileName.name.indexOf('.');
            let ext = fileName.name.substring(extIndex);
            let file = fileName.name.substring(0, extIndex);
            let today = new Date();

            if ((FILE_REGEX.test(file) || ALT_REGEX.test(file)) && EXT_REGEX.test(ext)) {
                let pieces = file.split('-');
                let startDate = new Date(pieces[1]);
                let endDate = new Date(pieces[2]);

                if ((today >= startDate && today < endDate) || (ALT_REGEX.test(file))) {
                    dropBox.sharingCreateSharedLinkWithSettings({
                        path: fileName.path_display,
                        settings: {requested_visibility: {'.tag': 'public'}}
                    })
                        .catch(error => console.error('Shared link error: ', error));
                }
            }
        });
        */

        response.entries.forEach(async (fileName) => {
            let response2 = await dropBox.sharingListSharedLinks({path: fileName.path_display});

            let file = response2.links[0].name.substring(0, response2.links[0].name.indexOf('.'));
            let startDate = new Date(file.split('-')[1]);
            let endDate = new Date(file.split('-')[2]);
            let today = new Date();

            if ((today >= startDate && today < endDate) || (ALT_REGEX.test(file))) {
                returnArr.push(response2.links[0]);
            }

            const sorted = returnArr.sort(compareCarousel);

            this.setState({displayUrl: sorted})
        });
    };

    render(){
        return(
            <div className={'landing-main'}>
                <div className={'landing-header'}>
                    <h1 style={{fontSize: '3.5em', lineHeight: '2'}}>Word of Faith Christian Center</h1>
                </div>
                <div className='carousel-box'>
                    <section className={'audio-landing'} style={{paddingTop: '10px', paddingBottom: '10px'}}>
                        <SoundPlayer/>
                        <div className={'audio-box'}>
                            <h1>Come as you are</h1>
                            <h2>Service Time @ 9:45am</h2>
                            <h2>Find Us @</h2>
                            <h3>1881 Nail Rd suite D</h3>
                            <h3>Horn Lake, MS 38637</h3>
                        </div>
                    </section>
                    <div className={'center-carousel'}>
                        <Carousel
                            indicators={true}
                            keyboard={true}
                            pauseOnHover={true}
                            slide={true}
                            wrap={true}
                        >
                            {this.state.displayUrl.map( element =>
                                <Carousel.Item>
                                    <img alt={'840x400'} src={fixUrl(element.url)}/>
                                </Carousel.Item>
                            )}
                        </Carousel>
                    </div>
                </div>
            </div>
        )
    };
}

const Landing = connect(null, mapDispatchToProps)(ConnectedLanding);

export default Landing;

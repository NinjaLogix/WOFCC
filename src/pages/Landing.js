import React from 'react';
import { connect } from 'react-redux';
import { change_page } from "../redux-def/actions";
import { Carousel } from 'react-bootstrap';
import { FILE_REGEX, EXT_REGEX, ALT_REGEX, dropBox, fixUrl } from '../script/appContext';
import '../style/wofcc_master.css';
import {SoundPlayer} from "../component";

const mapDispatchToProps = dispatch =>{
  return{
      change_page: page => dispatch(change_page(page))
  };
};

class ConnectedLanding extends React.PureComponent{
    constructor(){
      super();

      this.state = {
          page: '',
          checked: true,
          displayUrl: []
      };
    };

    componentDidMount(){
        this.setState({page: 'landing'});
        this.props.change_page('landing');

        let tempArr = [];

        dropBox.filesListFolder({path: process.env.REACT_APP_CAROUSEL_PATH})
            .then(response => {
                response.entries.forEach( fileName => {
                    let extIndex = fileName.name.indexOf('.');
                    let ext = fileName.name.substring(extIndex);
                    let file = fileName.name.substring(0, extIndex);
                    let today = new Date();

                    if((FILE_REGEX.test(file) || ALT_REGEX.test(file)) && EXT_REGEX.test(ext)){
                        let pieces = file.split('-');
                        let startDate = new Date(pieces[1]);
                        let endDate = new Date(pieces[2]);

                        if ((today >= startDate && today < endDate)|| (ALT_REGEX.test(file))) {
                            dropBox.sharingCreateSharedLinkWithSettings({
                                path: fileName.path_display,
                                settings: {requested_visibility: {'.tag': 'public'}}
                            })
                                .catch(error => console.error('Shared link error: ', error));
                        }
                    } else {
                        console.error('Image naming not in correct format: ', fileName.name);
                    }
                    dropBox.sharingListSharedLinks({path: fileName.path_display})
                        .then(response => {
                            response.links.forEach( innerThing => {
                                if (innerThing['.tag'] === 'file') {
                                    let file = innerThing.name.substring(0, innerThing.name.indexOf('.'));
                                    let startDate = new Date(file.split('-')[1]);
                                    let endDate = new Date(file.split('-')[2]);
                                    let today = new Date();

                                    if ((today >= startDate && today < endDate) || (ALT_REGEX.test(file))) {
                                        tempArr = [...tempArr, innerThing];
                                    }

                                    this.setState({displayUrl: tempArr.sort()});
                                }
                            })
                        })
                        .catch(error => console.log('Error listing files', error));
                })
            })
            .catch( error => { console.error('Error listing files', error) });
    };

    render(){
        return(
            <div className={'landing-main'}>
                <div className='carousel-box'>
                    <div className={'center-carousel'}>
                        <Carousel bsClass={'carousel'} indicators={false}>
                            {this.state.displayUrl.map( element =>
                                <Carousel.Item>
                                    <img alt={'840x400'} src={fixUrl(element.url)}/>
                                </Carousel.Item>
                            )}
                        </Carousel>
                    </div>
                </div>
                <h1>Word of Faith Christian Center Mississippi</h1>
                <section className={'audio-landing'}>
                    <SoundPlayer/>

                    <div className={'audio-box'}>
                        <h1>Come as you are</h1>
                        <h2>Find Us @</h2>
                        <h3>1881 Nail Rd suite D</h3>
                        <h3>Horn Lake, MS 38637</h3>
                    </div>
                </section>
            </div>
        )
    };
}

const Landing = connect(null, mapDispatchToProps)(ConnectedLanding);

export default Landing;

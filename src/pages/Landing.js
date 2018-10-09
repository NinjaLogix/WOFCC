import React from 'react';
import Fade from '@material-ui/core/Fade';
import { connect } from 'react-redux';
import { change_page } from "../redux-def/actions";
import { Carousel } from 'react-bootstrap';
import { FILE_REGEX, EXT_REGEX, ALT_REGEX, dropBox } from '../script/appContext';
import '../style/wofcc_master.css';

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

      this.fixUrl = this.fixUrl.bind(this.fixUrl);
    };

    componentDidMount(){
        this.setState({page: 'landing'});
        this.props.change_page('landing');

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

                        if (today >= startDate && today < endDate) {
                            dropBox.sharingCreateSharedLinkWithSettings({
                                path: fileName.path_display,
                                settings: {requested_visibility: {'.tag': 'public'}}
                            })
                                .catch(error => console.error('Shared link error: ', error));
                        }
                    } else {
                        console.log('Image naming not in correct format: ', fileName.name);
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
                                        this.setState(prevState => ({
                                            displayUrl: [...prevState.displayUrl, innerThing]
                                        }))
                                    }
                                }
                            })
                        })
                        .catch(error => console.log('Error listing files', error));
                })
            })
            .catch( error => { console.error('Error listing files', error) });
    };

    fixUrl(url){
        return url.replace(process.env.REACT_APP_DROPBOX_BAD_URL, process.env.REACT_APP_DROPBOX_GOOD_URL);
    }

    render(){
        const { checked } = this.state;
        return(
            <div className={'landing-main'}>
                <h1>Word of Faith Christian Center Southaven Mississippi</h1>
                {/*come back and make this better with the getFiles function*/}
                <div className={'center-carousel'}>
                    <Fade
                        in={checked}
                        style={{ transformOrigin: '0 0 0' }}
                        {...(checked ? { timeout: 2000 } : {})}
                    >
                        <Carousel bsClass={'carousel'} indicators={false}>
                            {this.state.displayUrl.map( element =>
                                <Carousel.Item>
                                    <img alt={'840x400'} src={this.fixUrl(element.url)}/>
                                </Carousel.Item>
                            )}
                        </Carousel>
                    </Fade>
                </div>
            </div>
        )
    };
}

const Landing = connect(null, mapDispatchToProps)(ConnectedLanding);

export default Landing;
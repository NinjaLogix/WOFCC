import React from 'react';
import Fade from '@material-ui/core/Fade';
import { connect } from 'react-redux';
import { change_page } from "../redux-def/actions";
import { Carousel } from 'react-bootstrap';
import FILE_REGEX from '../script/appContext';
import Dropbox from 'dropbox';
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

        const dropBox = new Dropbox.Dropbox({accessToken: process.env.REACT_APP_TOKEN});
        dropBox.filesListFolder({path: process.env.REACT_APP_CAROUSEL_PATH})
            .then(response => {
                response.entries.map( thing => {
                    //TODO - check if file matches the correct pattern ~ file_name-yyyymmdd-yyyymmdd.ext
                    //if(FILE_REGEX.test(thing.path_display)){
                        //TODO - split filename and get start and end dates
                        //split file code goes here
                        //let fileName =
                        //let startDate =
                        //let endDate =
                        //TODO - check if today's date is within the file's run dates and if it is attempt to create a share link
                        //if (today's date >= startDate and today's date <= endDate) {
                            dropBox.sharingCreateSharedLinkWithSettings({
                                path: thing.path_display,
                                settings: {requested_visibility: {'.tag': 'public'}}
                            })
                                .catch(error => console.error('Shared link error: ', error));
                        //} elseif (today's date > endDate) {
                        /*TODO - check if today's date is after the exp date and if it is then remove the share link
                            dropBox.sharingUnshareFile({file: ''}) //full path of the file
                                .then()
                                .catch();
                        */
                        //}
                    //}
                    dropBox.sharingListSharedLinks({path: thing.path_display})
                        .then(response => {
                            response.links.map( innerThing => {
                                if (innerThing['.tag'] === 'file') {
                                    this.setState(prevState => ({
                                        displayUrl:[...prevState.displayUrl, innerThing]
                                    }))
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
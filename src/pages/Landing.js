import React from 'react';
import Fade from '@material-ui/core/Fade';
import { connect } from 'react-redux';
import { change_page } from "../redux-def/actions";
import { Carousel } from 'react-bootstrap';
import { CAROUSEL_PATH } from '../script/appContext';
import Dropbox from 'dropbox';
//import DropboxTeam from 'dropbox';
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

      this.handleImages = this.handleImages.bind(this.handleImages);
    };

    componentDidMount(){
        this.setState({page: 'landing'});
        this.props.change_page('landing');

        const dropBox = new Dropbox.Dropbox({accessToken: TOKEN});
        console.log('handleImages', this.handleImages(dropBox));
    };

    handleImages(dropBoxObj){
        let urlArr = [];

        dropBoxObj.filesListFolder({path: CAROUSEL_PATH})
            .then(response => {
                response.entries.map( thing => {
                    dropBoxObj.sharingCreateSharedLinkWithSettings({
                            path: thing.path_display,
                            settings: {requested_visibility: {'.tag': 'public'}}
                        })
                        .catch(error => console.error('Error creating shared link', error));
                    dropBoxObj.sharingListSharedLinks({path: thing.path_display})
                        .then(response => {
                            response.links.map( innerThing => {
                                if (innerThing['.tag'] === 'file') {
                                    urlArr.push(innerThing)
                                }
                            })
                        })
                        .catch(error => console.log('Error listing files', error));
                })
            })
            .catch( error => { console.error('Error listing files', error) });

        return urlArr;
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
                                    <img alt={'840x400'} src={element.url}/>
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
import React from 'react';
import Fade from '@material-ui/core/Fade';
import { connect } from 'react-redux';
import { change_page } from "../redux-def/actions";
import { Carousel } from 'react-bootstrap';
import { Dropbox } from 'dropbox';
import { DropboxTeam } from 'dropbox';
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
          checked: true
      }
    };

    componentDidMount(){
        this.setState({page: 'landing'});
        this.props.change_page('landing');

        //TODO - implement the dropbox stuff for the carousel here maybe, look into the documentation to figure out how to use it
        //authenticate dropbox here

    };

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
                            <Carousel.Item>
                                <img alt={'840x400'} src={require('../resources/carousel/TheBig18.png')}/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img alt={'840x400'} src={require('../resources/carousel/Hebrews 1025.png')}/>
                            </Carousel.Item>
                        </Carousel>
                    </Fade>
                </div>
            </div>
        )
    };
}

const Landing = connect(null, mapDispatchToProps)(ConnectedLanding);

export default Landing;
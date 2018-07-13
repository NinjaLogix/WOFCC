import React from 'react';
import { connect } from 'react-redux';
import { change_page } from "../redux-def/actions";
import { Carousel } from 'react-bootstrap';
import Footer from '../component/Footer';
import Fade from '@material-ui/core/Fade';
import '../style/Landing.css';

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
    };

    /**
     * TODO - get this working by retrieving a list of images from server side directory
     * get a list of files from server side location
     * compare against regex and only get ones with a relevant date
     *
     *  ex:
     *  - regex something like ^[a-z].*_mm.dd.yyyy_mm.dd.yyyy\..*$ ==> fileName_startDate_endDate.extension
     *  - should match a file named something like imageName_180712_180716.png
     *
     * when this component loads we need to check for matching files and load them to the carousel
     * basic check is to see if current date is between the start date and end date of the desired image
     * we only want to load the relevant ones so this will allow only relevant content to show
     */
    getFiles(){
        // /^[a-z].*_[0-3]?[0-9].[0-3]?[0-9].(?:[0-9]{2})?[0-9]{2}_[0-3]?[0-9].[0-3]?[0-9].(?:[0-9]{2})?[0-9]{2}..*$/ .test();
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
                                <img width={840} height={400} alt={'840x400'} src={require('../resources/carousel/TheBig18.png')}/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img width={840} height={400} alt={'840x400'} src={require('../resources/carousel/Hebrews 1025.png')}/>
                            </Carousel.Item>
                        </Carousel>
                    </Fade>
                </div>
                <Footer page={this.state.page}/>
            </div>
        )
    }
}

const Landing = connect(null, mapDispatchToProps)(ConnectedLanding);

export default Landing;
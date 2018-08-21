import React from 'react';
import { connect } from 'react-redux';
import { change_page } from "../redux-def/actions";
import DCard from "../component/DCard";
import '../style/AboutUs.css'

const mapDispatchToProps = dispatch => {
  return{
      change_page: page => dispatch(change_page(page))
  };
};

class ConnectedAboutUs extends React.PureComponent{
    constructor(){
        super();

        this.state = {
            page: ''
        };
    };

    componentDidMount(){
        this.setState({page: 'about_us'});
        this.props.change_page('about_us')
    }

    render(){
        return(
            <div className={'about-container'}>
                <div className={'about-header'}>
                    <h3>WOFCC - Southaven</h3>
                    <h1>A little about who we are...</h1>
                </div>
                <div className={'about-context'}>
                    <DCard inverted/>
                </div>
            </div>
        )
    }
}

const AboutUs = connect(null, mapDispatchToProps)(ConnectedAboutUs);

export default AboutUs;
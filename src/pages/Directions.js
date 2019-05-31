import React from 'react';
import Iframe from 'react-iframe';
import {connect} from 'react-redux';
import {change_page} from "../redux-def/actions";
import '../style/wofcc_master.css';

const mapDispatchToProps = dispatch =>{
    return{
        change_page: page => dispatch(change_page(page))
    };
};

class ConnectedDirections extends React.PureComponent{
    constructor(){
        super();

        this.state = {
            page: ''
        }
    }

    componentDidMount(){
        this.setState({page: 'directions'});
        this.props.change_page('services');
    }

    render(){
        return(
            <div className={'direction-container'}>
                <h1>Trying to Find Us?</h1>
                <h2>We aren't too hard to find. Our building is located in suite D</h2>
                <h3>Mailing Address</h3>
                <p>P.O. Box 1968 Southaven, MS 38671</p>
                <div className={'directions-map-container'}>
                    <Iframe
                        url={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6540.728862544873!2d-90.02572996728493!3d34.94747358037176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d5618baea2c68b%3A0xdb0f86cf9ad4538!2s1881+Nail+Rd+suite+d%2C+Horn+Lake%2C+MS+38637!5e0!3m2!1sen!2sus!4v1554175353512!5m2!1sen!2sus"}
                        width={'850'}
                        height={'400'}
                        className={'directions-iframe-gmaps'}
                        display={'initial'}
                        allowFullScreen/>
                </div>
            </div>
        )
    }
}

const Directions = connect(null,mapDispatchToProps)(ConnectedDirections);

export default Directions;

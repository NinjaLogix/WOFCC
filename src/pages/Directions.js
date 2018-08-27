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
                <h3>We aren't too hard to find. Currently located on North Creek Golf Course</h3>
                <div className={'directions-map-container'}>
                    <Iframe url={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1634.3650618322474!2d-90.07323101162912!3d34.988424078475646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x3157cf420a1fe2e8!2sWord+of+Faith+Southaven!5e0!3m2!1sen!2sus!4v1432622541051'} width={'850'}
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
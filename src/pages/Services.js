import React from 'react';
import { connect } from 'react-redux';
import {change_page} from "../redux-def/actions";
import WebCard from '../component/WebCard';
import { designContext } from '../script/appContext';
import '../style/wofcc_master.css';

const mapDispatchToProps = dispatch =>{
    return{
        change_page: page => dispatch(change_page(page))
    };
};

class ConnectedServices extends React.PureComponent{
    constructor(){
        super();

        this.state = {
            page: '',
            context: designContext('services')
        }
    };

    componentDidMount(){
        this.setState({page: 'services'});
        this.props.change_page('services');
    }

    render(){
        return(
            <div className={'service-container'}>
                <div className={'service-mid-container'}>
                    <h1>Our Services to You</h1>
                    <div className={'service-flexbox'}>
                        {this.state.context.map(el =>
                            <div className={'service-webCard-container'}>
                                <WebCard image={el.image} headline={el.title} context={el.context}/>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

const Services = connect(null, mapDispatchToProps)(ConnectedServices);

export default Services;
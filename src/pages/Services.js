import React from 'react';
import { connect } from 'react-redux';
import {change_page} from "../redux-def/actions";
import WebCard from '../component/WebCard';
import { getServices } from "../script/appDetails";

const mapDispatchToProps = dispatch =>{
    return {
        change_page: page => dispatch(change_page(page))
    };
};

class ConnectedServices extends React.Component{
    constructor(){
        super();

        this.state = {
            page: ''
        }
    };

    componentDidMount(){
        this.setState({page: 'services'});
        this.props.change_page('services');
    }

    render(){
        const elements = getServices();
        return(
            <div>
            {elements.map(el =>
                <WebCard image={'28.jpg'} headline={'New Members Classes'}/>
            )}
            </div>
        );
    }
}

const Services = connect(mapDispatchToProps)(ConnectedServices);

export default Services;
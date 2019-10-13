import React from 'react';
import {Context} from './Context';

export class Provider extends React.Component{
    state = {
        services: [],
        setServices: this.setServices.bind(this)
    }

    setServices = () => {

    }

    //* -------> Lifecycle
    componentDidMount(){
        //? move all the infomration here ona per page basis
    }

    render(){
        return(
            <Context.Provider value={{context: {...this.state}}}>
                {this.props.children}    
            </Context.Provider>
        )
    }
}
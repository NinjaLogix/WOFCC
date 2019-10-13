import React from 'react';
import uuidv1 from "uuid";
import {Context} from './Context';

export class Provider extends React.Component{
    constructor(){
        super ();

        this.state = {
            services: [
                {key: uuidv1(), image: freepik28Img, title: 'New Members Classes', context: <p>4 Classes Total by appointment in the business suite.</p>},
                {key: uuidv1(), image: freepik1869Img, title: 'Worship Service & Corporate Confession', context: <p>Sunday's @ 9.45am<br/>First Sundays: Holy Communion & Mission</p>},
                {key: uuidv1(), image: freepik11405Img, title: 'Children\'s Ministry', context: <p>2nd & 3rd Sunday's<br/>9:45am in the Children's Zone<br/>Not held on 1st or 5th Sunday's<br/>ages 5 - 11</p>},
                {key: uuidv1(), image: freepik397Img, title: 'Pastoral Care', context: <p>24/7 365!<br/>Visit the <Link to={'/contact-us'}>Contact Us</Link> page for contact information</p>}
            ],
            setServices: this.setServices.bind(this)
        }
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
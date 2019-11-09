import React from 'react';
import {Context} from './Context';

export const withContext = (Component) => {
    return function ContextComponent(props){
        return(
            <Context.Consumer>
                {(contexts) => <Component {...props} {...contexts}/>}
            </Context.Consumer>
        )
    }
}
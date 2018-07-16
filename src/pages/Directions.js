import React from 'react';
import GoogleMap from '../component/GoogleMap';
import '../style/Directions.css';

class Directions extends React.PureComponent{
    constructor(){
        super();

        this.state = {
            page: ''
        }
    }

    render(){
        return(
            <div className={'direction-container'}>
                <h1>Trying to Find Us?</h1>
                <h3>We aren't too hard to find. Currently located on North Creek Golf Course</h3>
                <div className={'directions-map-container'}>
                    <GoogleMap/>
                </div>
            </div>
        )
    }
}

export default Directions;
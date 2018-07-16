/*
 * Following: https://www.fullstackreact.com/articles/how-to-write-a-google-maps-react-component/
 */
import React from 'react';
import {testGoogleApiKey, latLng} from '../script/appContext';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const style = {
    minWidth: '30%',
    minHeight: '50%',
    maxWidth: '60%',
    maxHeight: '70%',
    width: '60%',
    height: '100%'
};

export class GoogleMap extends React.PureComponent{
    render(){
        return(
          <Map google={this.props.google} style={style} zoom={14} initialCenter={{lat: 34.9868725, long: -90.0680343}}>
              <Marker name={'wofcc southaven'}/>
              <InfoWindow>
                  <div>
                      <h1>Hello!</h1>
                  </div>
              </InfoWindow>
          </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo'
})(GoogleMap);


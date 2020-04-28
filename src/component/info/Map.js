import React, {useState} from 'react';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import {MapWrapper} from './MapStyle';

export const WOFCCMap = (info) => {
    const [location] = useState([34.948353, -90.02126]);
    const {lat, long, addrs} = info;

    return (
        <MapWrapper>
            <LeafletMap
                center={lat ? [lat, long] : location}
                zoom={14}
                attributionControl={true}
                zoomControl={true}
                doubleClickZoom={true}
                scrollWheelZoom={true}
                dragging={true}
                animate={true}
                easeLinearity={0.35}>

                <TileLayer url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'/>
                
                <Marker position={lat ? [lat, long] : location}>
                    <Popup>
                        {addrs}
                    </Popup>
                </Marker>
            </LeafletMap>
        </MapWrapper>
    )
}
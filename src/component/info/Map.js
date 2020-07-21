import React from 'react';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import { MapWrapper } from './style/MapStyle';

export const WOFCCMap = ({ info }) => (
  <MapWrapper>
    {info && (
      <LeafletMap
        center={[info.lat, info.long]}
        zoom={14}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >
        <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />

        <Marker position={[info.lat, info.long]}>
          <Popup>{info.addrs}</Popup>
        </Marker>
      </LeafletMap>
    )}
  </MapWrapper>
);

import React, { useState, useEffect, useContext } from 'react';
import { Menu } from '../component/navigation/menu';
import { Footer } from '../component/navigation/footer';
import {
  Container,
  Heading1,
  Heading2,
  MapContainer,
  SubContainer,
  AddrsContainer,
} from './style/DirectionsStyle';
import { WOFCCMap } from '../component/info';
import { config } from '../config/config';
import { WofccContext } from '../component/context/WofccContext';
import { LandingBackground } from '../assets';

export const Directions = () => {
  const [api] = useContext(WofccContext);
  const [location, setLocation] = useState();

  useEffect(() => {
    const lookupLocation = async () => {
      if (api.location) setLocation(api.location);
      else {
        const location = await api.sanity_query(api.singleton, {
          query: config.sanity_queries.locations,
        });
        setLocation(location[0]);
      }
    };

    lookupLocation();
  });

  return (
    <Container>
      <SubContainer backgroundImage={LandingBackground}>
        <Menu />

        <Heading1>Trying to Find Us?</Heading1>
        <Heading2>We aren't too hard to find.</Heading2>

        <MapContainer>
          {location && (
            <WOFCCMap
              info={{
                lat: location.map_location.lat,
                long: location.map_location.lng,
                addrs: location.address + '\n' + location.address_cont,
              }}
            />
          )}
        </MapContainer>
      </SubContainer>

      {location && (
        <AddrsContainer>
          <h2>Mailing Address</h2>

          {location && (
            <span>
              <h4>{location.address}</h4>
              <h4>{location.address_cont}</h4>
            </span>
          )}
        </AddrsContainer>
      )}
      <Footer />
    </Container>
  );
};

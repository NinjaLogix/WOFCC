import React, { useContext, useEffect, useState } from 'react';
import { WofccContext } from '../context/WofccContext';
import { FullStyledCard, StyledCard } from './style/SharedCardStyle';
import { WOFCCMap } from './Map';

export const MapCard = () => {
  const [api] = useContext(WofccContext);

  const [ll, setLL] = useState(undefined);

  useEffect(() => {
    if (api.location) {
      const { lat, lng } = api.location.map_location;

      setLL({ lat, lng });
    }
  }, [api.location]);

  return <FullStyledCard>{ll && <WOFCCMap info={ll} />}</FullStyledCard>;
};

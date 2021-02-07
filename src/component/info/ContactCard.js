import React, { useContext, useState, useEffect } from 'react';
import { WofccContext } from '../context/WofccContext';
import { CardRow, StyledCard } from './style/SharedCardStyle';
import { CardContent, Typography } from '@material-ui/core';
import { formatPhone } from '../../util';

export const ContactCard = () => {
  const [api] = useContext(WofccContext);
  const [loc, setLoc] = useState(undefined);

  useEffect(() => {
    const { location } = api;

    if (location) setLoc(location);
  }, [api.location]);

  /*todo -> animate elevation with react-spring*/
  return (
    <StyledCard>
      {loc && (
        <CardContent>
          <CardRow>
            <section>
              <Typography variant={'h3'} gutterBottom align={'center'}>
                You can find us here...
              </Typography>

              <Typography variant={'h4'} gutterBottom align={'center'}>
                {loc.address}
              </Typography>

              <Typography variant={'h4'} gutterBottom align={'center'}>
                {loc.address_cont}
              </Typography>
            </section>

            <section>
              <Typography variant={'h3'} gutterBottom align={'center'}>
                ...or call us.
              </Typography>

              {loc.phones.map((e, index) => (
                <Typography
                  key={index}
                  variant={'h4'}
                  gutterBottom
                  align={'center'}
                >
                  {formatPhone(e.phone)}
                </Typography>
              ))}
            </section>
          </CardRow>
        </CardContent>
      )}
    </StyledCard>
  );
};

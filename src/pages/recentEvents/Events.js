import React, { useState, useEffect, useContext } from 'react';
import { Menu } from '../../component/navigation/menu';
import { Footer } from '../../component/navigation/footer';
import {
  Wrapper,
  Header,
  GalleryWrapper,
  GridContainer
} from './EventsStyle';
import { config } from '../../config/config';
import { WofccContext } from '../../component/context/WofccContext';
import { Album } from '../../component/gallery/Album';
import { Grid } from '@material-ui/core';

export const Events = function(props) {
  const [api] = useContext(WofccContext);
  const [galleries, setGalleries] = useState([]);
  const [break_point] = useState(4);
  const [spacing] = useState(2);

  useEffect(() => {
    const queryForAlbums = async () => {
      const data = await api.sanity_query(api.singleton, { query: config.sanity_queries.all_albums });

      setGalleries([...data.filter(e => !e.isTemp)]);
    };

    queryForAlbums();
  }, []);

  return (
    <Wrapper>
      <Header>
        <Menu/>
        <h2>Pics from recent events and activities</h2>
      </Header>

      <GalleryWrapper>
        <GridContainer
          container
          spacing={spacing}
          justify={'space-evenly'}
          alignItems={'center'}>
          {galleries.map(item => (
            <Grid key={item.id} item xl={break_point} xs={break_point}>
              <Album
                title={item.description}
                cover={item.cover_image.url}
                id={item.id}
                date={item.create_date}/>
            </Grid>
          ))}
        </GridContainer>
      </GalleryWrapper>

      <Footer/>
    </Wrapper>
  );
};
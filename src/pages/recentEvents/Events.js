import React, { useState, useEffect, useContext } from 'react';
import { Menu } from '../../component/navigation/menu';
import { Footer } from '../../component/navigation/footer';
import { Wrapper, Header, TitleBanner } from '../shared_style/SharedPageStyle';
import { GalleryWrapper, GridContainer } from './style/EventsStyle';
import { config } from '../../config/config';
import { WofccContext } from '../../component/context/WofccContext';
import { Album } from '../../component/gallery/Album';
import { Grid, Typography } from '@material-ui/core';

//todo -> mobile:forgot to include the backgroundImg prop to wrapper
export const Events = function (props) {
  const [api] = useContext(WofccContext);
  const [galleries, setGalleries] = useState([]);
  const [break_point] = useState(4);
  const [spacing] = useState(2);

  useEffect(() => {
    const queryForAlbums = async () => {
      const data = await api.sanity_query(api.singleton, {
        query: config.sanity_queries.all_albums,
      });

      setGalleries([...data.filter(e => !e.isTemp)]);
    };

    queryForAlbums();
  }, []);

  return (
    <Wrapper>
      <Header>
        <Menu />
        <TitleBanner>
          <Typography gutterBottom variant={'h2'} component={'h2'}>
            Pics from recent events and activities
          </Typography>
        </TitleBanner>
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
                date={item.create_date}
              />
            </Grid>
          ))}
        </GridContainer>
      </GalleryWrapper>

      <Footer />
    </Wrapper>
  );
};

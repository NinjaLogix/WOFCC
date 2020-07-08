import React, {useState, useEffect, useContext} from 'react';
import {Menu} from '../../component/navigation/menu';
import {Footer} from '../../component/navigation/footer';
import {
  Wrapper,
  Header,
  GalleryWrapper,
  GridContainer,
  GridItem} from './EventsStyle';
import {config} from '../../config/config'
import {WofccContext} from '../../component/context/WofccContext';

export const Events = function(props){
  const [api] = useContext(WofccContext);
  const [galleries, setGalleries] = useState([]);

  useEffect(() => {
    const queryForAlbums = async () => {
      const data = await api.sanity_query(api.singleton, {query: config.sanity_queries.all_albums});

      // setGalleries([...data]);
      console.log('data', data);
    }

    queryForAlbums();
  }, []);

  return(
    <Wrapper>
      <Header>
        <Menu/>
        <h2>A few of our events</h2>
      </Header>

      <GalleryWrapper>
        <GridContainer container>

        </GridContainer>
      </GalleryWrapper>

      <Footer/>
    </Wrapper>
  )
}
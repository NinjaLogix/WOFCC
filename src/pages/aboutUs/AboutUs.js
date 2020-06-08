import React, {useState, useEffect, useContext} from 'react'
import {Menu} from '../../component/navigation/menu'
import {Footer} from '../../component/navigation/footer'
import {
  Wrapper,
  Header,
  Context} from '../ministries/MinistriesStyle'
import {InfoCard} from '../../component/info'
import {WofccContext} from '../../component/context/WofccContext'
import {AboutBackground} from '../../assets'
import {config} from '../../config/config'

export const AboutUs = function(props) {
  const [api] = useContext(WofccContext);
  const [about, setAbout] = useState([]);

  useEffect(() => {
    const queryData = async () => {
      const data = await api.sanity_query(api.singleton, {query: config.sanity_queries.about});

      setAbout([...data]);
    }

    queryData();
  }, []);

  return (
    <Wrapper>
      <Header backgroundImg={AboutBackground}>
        <Menu/>
        <h1>WOFCC - Southaven</h1>
        <h3>A little about who we are...</h3>
      </Header>

      <Context>
        {about &&
          about.map(thing => (
            <InfoCard
              key={thing.title}
              src={thing.imageUrl}
              title={thing.title}
              text={thing.description}
              detail={thing.description}/>
          ))
        }
      </Context>

      <Footer/>
    </Wrapper>
  )
}

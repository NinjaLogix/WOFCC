import React, {useState, useEffect, useContext} from 'react'
import {InfoCard} from '../../component/info'
import {Menu} from '../../component/navigation/menu'
import {Footer} from '../../component/navigation/footer'
import {
  Wrapper,
  Header,
  Context} from './style/MinistriesStyle'
import {config} from '../../config/config'
import {WofccContext} from '../../component/context/WofccContext'
import {AboutBackground} from '../../assets'

export const Ministries = function(props) {
  const [api] = useContext(WofccContext);
  const [ministries, setMinistries] = useState([]);

  useEffect(() => {
    const getMinistries = async () => {
      const data = await api.sanity_query(api.singleton, {query:config.sanity_queries.ministries});

      setMinistries(data);
    }

    getMinistries();
  }, []);

  return(
    <Wrapper>
      <Header backgroundImg={AboutBackground}>
        <Menu/>
        <h1>WOFCC - Southaven</h1>
        <h3>The ministries we currently provide...</h3>
      </Header>

      <Context>
        {ministries.map(el => (
          <InfoCard
            key={el.key}
            src={el.imageUrl}
            title={el.title}
            text={el.description}/>
        ))}
      </Context>
      <Footer/>
    </Wrapper>
  )
}

import React, { useState, useEffect, useContext } from 'react';
import { Menu } from '../component/navigation/menu';
import { Footer } from '../component/navigation/footer';
import {
  Container,
  Header,
  Heading1,
  Heading2,
  Heading3,
  P,
  ContactAContainer,
  SocialBadge,
  BottomContainer,
  ContactLeftBottom,
  PastorImg,
  ContactRightBottom,
} from './style/ContactUsStyle';
import { config } from '../config/config';
import { WofccContext } from '../component/context/WofccContext';
import { FaceBookLogo, Pastors, ContactUsBackground } from '../assets';

export const ContactUs = props => {
  const [api] = useContext(WofccContext);
  const [location, setLocation] = useState();

  const formatPhone = phone => {
    const ph = phone.toString();

    if (ph.length === 10)
      return (
        '(' +
        ph.substring(0, 3) +
        ') ' +
        ph.substring(3, 6) +
        '-' +
        ph.substring(6, 10)
      );
    else return '';
  };

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
  }, []);

  return (
    <Container>
      <Header backgroundImg={ContactUsBackground}>
        <Menu />
        <Heading1>Keep In Touch</Heading1>
        <Heading3>We love you! Come back anytime!</Heading3>
        <Heading2>FaceBook</Heading2>
        <ContactAContainer>
          <a href={config.faceBookUrl}>
            <SocialBadge src={FaceBookLogo} alt={'facebook'} />
          </a>
        </ContactAContainer>
        <h3>Keep in touch with us on Facebook!</h3>
      </Header>
      <BottomContainer>
        <ContactLeftBottom>
          <PastorImg src={Pastors} alt={'pastor'} />
        </ContactLeftBottom>

        <ContactRightBottom>
          <p>
            You have a concern, we have a care! It's all love around here!
            <br />
            Let us know what's on your mind please!
            <br />
            Feel free to email us at:
          </p>

          {location && <Heading2>{location.email}</Heading2>}

          <P>You can find us here:</P>

          {location && (
            <section>
              <Heading3>{location.address}</Heading3>
              <Heading3>{location.address_cont}</Heading3>
            </section>
          )}

          <P>or give us a call at:</P>

          {location &&
            location.phones.map(phone => (
              <Heading3>{formatPhone(phone.phone)}</Heading3>
            ))}
        </ContactRightBottom>
      </BottomContainer>
      <Footer />
    </Container>
  );
};

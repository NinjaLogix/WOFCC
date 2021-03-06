import styled from 'styled-components';
import { ContactUsBackground } from '../../assets';

export const Container = styled.div``;

export const Header = styled.section`
  width: 100%;
  height: 400px;
  background-image: url('${ContactUsBackground}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  h3 {
    text-align: center;
  }
`;

export const Heading1 = styled.h1`
  margin-top: 1px;
  color: black;
  position: relative;
  alignment: center;
  text-align: center;
  padding-top: 10px;
`;

export const Heading2 = styled.h2`
  margin-top: 1px;
  color: black;
  position: relative;
  alignment: center;
  text-align: center;
  padding-top: 10px;
`;

export const Heading3 = styled.h3`
  margin-top: 1px;
  color: black;
  position: relative;
  alignment: center;
  text-align: center;
  padding-top: 10px;
`;

export const P = styled.p`
  margin-top: 1px;
  color: black;
  position: relative;
  alignment: center;
  text-align: center;
  padding-top: 10px;
`;

export const ContactAContainer = styled.section`
  width: 150px;
  height: 150px;
  margin-left: auto;
  margin-right: auto;
`;

export const SocialBadge = styled.img`
  border-radius: 5px;
  height: 150px;
  width: 150px;
  display: block;
`;

export const BottomContainer = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 100%;
`;

export const ContactLeftBottom = styled.section`
  margin-top: 20px;
`;

export const PastorImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 2%;
  -moz-box-shadow: 0 0 5px 1px #899;
  -webkit-box-shadow: 0 0 5px 1px #899;
`;

export const ContactRightBottom = styled.section`
  width: 70%;
  margin-top: 20px;

  p {
    font-size: 1.2em;
    text-align: center;
  }
`;

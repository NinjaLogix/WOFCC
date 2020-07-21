import styled from 'styled-components';
import { AboutBackground } from '../../../assets';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Header = styled.section`
    width: 100%;
    height: 150px;
    background-image: url('${AboutBackground}');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;

    h1, h2, h3 {
        text-align: center;
    }
`;

export const Context = styled.section`
  position: relative;
  width: 50%;
`;

export const List = styled.ul`
  display: block;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  list-style: none;
  width: 50%;
`;

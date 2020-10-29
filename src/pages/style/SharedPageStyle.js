import styled from 'styled-components';
//todo -> move all pages to use as much of this as possible
export const Wrapper = styled.div`
  width: 100%;
`;

export const Header = styled.section`
  width: 100%;
  height: 150px;
  background-image: url('${props => props.backgroundImg}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

export const TitleBanner = styled.section`
  width: 100%;
  height: 9em;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

export const Context = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding: 2% 5%;
`;

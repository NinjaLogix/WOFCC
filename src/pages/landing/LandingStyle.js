import styled from 'styled-components';

const header_url = process.env.REACT_APP_LANDING_HEADER_URL;

export const Wrapper = styled.div`
    flex: 1 100%;
`;

export const Header = styled.section`
    background-image: url('${props => props.backgroundImg ? props.backgroundImg : header_url}');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;

	-webkit-box-shadow: -5px 8px 6px -6px black;
	   -moz-box-shadow: -5px 8px 6px -6px black;
	        box-shadow: -5px 8px 6px -6px black;

    position: relative;
    z-index: 1;
`;

export const Title = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: center;
    justify-content: center;

    h1 {
        font-size: 3.5em;
        line-height: 2;
        align-self: center;
        z-index: 1;
    }

    section {
        align-self: center;
        z-index: 0;
        height: 4em;
    }
`;

export const CarouselBox = styled.section`
    width: calc(100vw - 1.3%);
    flex-flow: row nowrap;
    justify-content: center;
    align-content: center;
`;

export const WelcomeBox = styled.section`
    width: calc(100vw - 1.3%);
    margin: auto;
    min-height: 20vh;
    max-height: 25vh;
    display: inline-flex;
`;

export const WelcomeLeft = styled.section`
    width: 30%;
    background-color: #eeeeee;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 40' width='80' height='40'%3E%3Cpath fill='%233e8a00' fill-opacity='0.11' d='M0 40a19.96 19.96 0 0 1 5.9-14.11 20.17 20.17 0 0 1 19.44-5.2A20 20 0 0 1 20.2 40H0zM65.32.75A20.02 20.02 0 0 1 40.8 25.26 20.02 20.02 0 0 1 65.32.76zM.07 0h20.1l-.08.07A20.02 20.02 0 0 1 .75 5.25 20.08 20.08 0 0 1 .07 0zm1.94 40h2.53l4.26-4.24v-9.78A17.96 17.96 0 0 0 2 40zm5.38 0h9.8a17.98 17.98 0 0 0 6.67-16.42L7.4 40zm3.43-15.42v9.17l11.62-11.59c-3.97-.5-8.08.3-11.62 2.42zm32.86-.78A18 18 0 0 0 63.85 3.63L43.68 23.8zm7.2-19.17v9.15L62.43 2.22c-3.96-.5-8.05.3-11.57 2.4zm-3.49 2.72c-4.1 4.1-5.81 9.69-5.13 15.03l6.61-6.6V6.02c-.51.41-1 .85-1.48 1.33zM17.18 0H7.42L3.64 3.78A18 18 0 0 0 17.18 0zM2.08 0c-.01.8.04 1.58.14 2.37L4.59 0H2.07z'%3E%3C/path%3E%3C/svg%3E");
    clip-path: polygon(0 0, 100% 0, 70% 100%, 0 100%);
`;

export const WelcomeRight = styled.section`
    display: flex;
    flex-flow: row wrap;
    align-content: center;
    width: 70%;

    section {
        width: 30%;
    }

    h1 {
        font-size: 1.7em;
        line-height: 1;
    }

    h2 {
        font-size: 1.5em;
        line-height: 0;
    }

    span {
        margin-left: 7%;
    }
`;

export const AudioLanding = styled.section`
    width: calc(100vw - 5%);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 10px 0 10px 0;
`;

export const AudioBox = styled.section`
    width: 30vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 5px;
`;

export const CenterCarousel = styled.section`
    margin: auto;
    padding: 1% 0 2.4% 0;
    max-width: 70%;
`;

export const CarouselWrapper = styled.div`
    width: 100%;
    background-color: #EEEEEE;
`;

export const VideoWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
`;

export const VideoLeft = styled.section`
    width: 52%;
`;

export const VideoRight = styled.section`
    width: 48%;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: flex-end;
    clip-path: polygon(40% 2%, 100% 2%, 100% 100%, 0 100%);
    background-color: #eeeeee;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 40' width='80' height='40'%3E%3Cpath fill='%233e8a00' fill-opacity='0.11' d='M0 40a19.96 19.96 0 0 1 5.9-14.11 20.17 20.17 0 0 1 19.44-5.2A20 20 0 0 1 20.2 40H0zM65.32.75A20.02 20.02 0 0 1 40.8 25.26 20.02 20.02 0 0 1 65.32.76zM.07 0h20.1l-.08.07A20.02 20.02 0 0 1 .75 5.25 20.08 20.08 0 0 1 .07 0zm1.94 40h2.53l4.26-4.24v-9.78A17.96 17.96 0 0 0 2 40zm5.38 0h9.8a17.98 17.98 0 0 0 6.67-16.42L7.4 40zm3.43-15.42v9.17l11.62-11.59c-3.97-.5-8.08.3-11.62 2.42zm32.86-.78A18 18 0 0 0 63.85 3.63L43.68 23.8zm7.2-19.17v9.15L62.43 2.22c-3.96-.5-8.05.3-11.57 2.4zm-3.49 2.72c-4.1 4.1-5.81 9.69-5.13 15.03l6.61-6.6V6.02c-.51.41-1 .85-1.48 1.33zM17.18 0H7.42L3.64 3.78A18 18 0 0 0 17.18 0zM2.08 0c-.01.8.04 1.58.14 2.37L4.59 0H2.07z'%3E%3C/path%3E%3C/svg%3E");

    section {
        width: 70%;
        padding-right: 2%;
    }
`;
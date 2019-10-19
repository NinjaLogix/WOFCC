import React from 'react';
import {SoundPlayer} from "../../component/mp3";
import {Menu} from '../../component/navigation/menu';
import {Footer} from '../../component/navigation/footer';
import {provideAudioData} from '../../util';
import {WofccCarousel} from '../../component/carousel';
import {Wrapper, Header, Title, CarouselBox, AudioLanding, AudioBox, CenterCarousel} from './LandingStyle';

export default class Landing extends React.Component{
    state = {
        audioData: null
    }

    LogoSmall = process.env.REACT_APP_LOGO_SMALL_URL;

    //* ----------------------------------------------------> Lifecycle Methods
    componentDidMount(){
        provideAudioData()
            .then(response => this.setState({audioData: response}))
            .catch(error => console.log('error getting audio data', error));
    }

    render(){
        const {audioData} = this.state;

        return(
            <Wrapper>
                <Header>
                    <Menu/>
                    <Title>
                        <h1>Word of Faith Christian Center</h1>
                        <section>
                            <img src={this.LogoSmall} alt={'badge'}/>
                        </section>
                    </Title>
                </Header>

                <CarouselBox>
                    <AudioLanding>
                        {audioData && 
                            <SoundPlayer data={audioData}/>
                        }

                        <AudioBox>
                            <h1>Come as you are</h1>
                            <h2>Service Time @ 9:45am</h2>
                            <h2>Find Us @</h2>
                            <h3>1881 Nail Rd suite D</h3>
                            <h3>Horn Lake, MS 38637</h3>
                        </AudioBox>
                    </AudioLanding>
                </CarouselBox>

                <CenterCarousel style={{margin: 'auto'}}>
                    <WofccCarousel/>
                </CenterCarousel>

                <Footer/>
            </Wrapper>
        )
    }
}
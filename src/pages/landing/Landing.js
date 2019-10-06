import React from 'react';
import {SoundPlayer} from "../../component";
import {Menu} from '../../component/navigation/menu';
import {Footer} from '../../component/navigation/footer';
import {provideAudioData} from '../../util';
import {WofccCarousel} from '../../component/carousel';
import {LogoSmall} from '../../script/appContext';
import '../../style/wofcc_master.css';

export default class Landing extends React.Component{
    state = {
        audioData: null
    }

    //* ----------------------------------------------------> Lifecycle Methods
    componentDidMount(){
        provideAudioData()
            .then(response => this.setState({audioData: response}))
            .catch(error => console.log('error getting audio data', error));
    }

    render(){
        const {audioData} = this.state;

        return(
            <div className={'landing-main'}>
                <section className={'landing-header'}>
                    <Menu/>

                    <section className={'landing-title'}>
                        <h1 style={{fontSize: '3.5em', lineHeight: '2', alignSelf: 'center', zIndex: '1'}}>Word of Faith Christian Center</h1>
                        <section style={{alignSelf: 'center', zIndex: '0', height: '4em'}}>
                            <img src={LogoSmall} alt={'badge'}/>
                        </section>
                    </section>
                </section>

                <section className='carousel-box'>
                    <section className={'audio-landing'} style={{paddingTop: '10px', paddingBottom: '10px'}}>
                        {audioData && 
                            <SoundPlayer data={audioData}/>
                        }

                        <div className={'audio-box'}>
                            <h1>Come as you are</h1>
                            <h2>Service Time @ 9:45am</h2>
                            <h2>Find Us @</h2>
                            <h3>1881 Nail Rd suite D</h3>
                            <h3>Horn Lake, MS 38637</h3>
                        </div>
                    </section>
                </section>

                <section className={'center-carousel'} style={{margin: 'auto'}}>
                    <WofccCarousel/>
                </section>

                <Footer/>
            </div>
        )
    }
}
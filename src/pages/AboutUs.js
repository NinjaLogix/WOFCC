import React from 'react';
import { connect } from 'react-redux';
import { change_page } from "../redux-def/actions";
import DCard from "../component/DCard";
import { designContext } from '../script/appContext';
import '../style/wofcc_master.css'

const mapDispatchToProps = dispatch => {
  return{
      change_page: page => dispatch(change_page(page))
  };
};

class ConnectedAboutUs extends React.PureComponent{
    constructor(){
        super();

        this.state = {
            page: '',
            context: []
        };
    };

    componentDidMount(){
        this.setState({page: 'about_us'});
        this.props.change_page('about_us');
        this.setState({context: designContext('about_us')});
    }

    flipFlop(index){
        return index % 2 > 0;
    }

    render(){
        return(
            <div className={'about-ministries-container'}>
                <div className={'about-ministries-header'}>
                    <h1>WOFCC - Southaven</h1>
                    <h3>A little about who we are...</h3>
                </div>
                <div className={'about-ministries-context'}>
                    <ul className={'about-ministries-list'}>
                        {this.state.context.map((el, index) => (
                            <li key={el.key}>
                                <DCard
                                    inverted={this.flipFlop(index+1)}
                                    imageUrl={String(el.image)}
                                    title={el.title}
                                    content={el.context}
                                    enableModal={true}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

const AboutUs = connect(null, mapDispatchToProps)(ConnectedAboutUs);

export default AboutUs;
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Button } from 'react-bootstrap';
import Avatar from "@material-ui/core/Avatar";
import { Redirect } from 'react-router-dom';
import {set_gallery} from "../redux-def/actions";
import connect from "react-redux/es/connect/connect";

const mapDispatchToProps = dispatch =>{
    return{
        set_gallery: gallery_component => dispatch(set_gallery(gallery_component))
    };
};

const randomColor =()=> {
    const colors = ['#F44336', '#607d8b', '#FF9800', '#00BCD4', '#CDDC39'];
    let randomcolor = Math.floor((Math.random() * colors.length-1) + 1);
    return colors[randomcolor];
};

const styles = {
    container: {
        padding: 10
    },
    card: {
        minWidth: 50,
        maxWidth: 300,
        paddingBottom: 10,
        minHeight: 400,
        maxHeight: 400
    },
    media: {
        minHeight: 20,
        paddingTop: '56.25%'
    },
    avatar: {
        margin: 10,
        backgroundColor: randomColor()
    },
    cardButton: {
        align: 'center'
    },
    sectionFlex: {
        width: '100%',
        display: 'inline-flex'
    },
    subSectionFlex: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'flex-start'
    }
};

class ConnectedGalleryCard extends React.PureComponent{
    static propTypes = {
        eventCoverImageUrl: PropTypes.string,
        eventTitle: PropTypes.string,
        eventSubheading: PropTypes.string,
        eventDate: PropTypes.string,
        eventGallery: PropTypes.array
    };

    static defaultProps = {
        eventTitle: 'Sample Title',
        eventCoverImageUrl: '#'
    };

    provideAvatarText(title_explicit){
        let tempArr = [];
        title_explicit.split(' ').forEach(word =>
            tempArr.push(word.split(/(?=[a-z])/)[0].toUpperCase())
        );
        return tempArr[0] + tempArr[tempArr.length-1];
    }

    constructor(){
        super();

        this.state = {
            redirect: false
        }
    }

    set_redirect =()=> this.setState({redirect: true});

    render_redrect =()=> {
        if (this.state.redirect){
            return <Redirect push={'/recent-events'} to={'/gallery-view'}/>
        }
    };

    handleRedirect=()=>{
        this.props.set_gallery(this.props.eventGallery);
        this.set_redirect()
    };

    render(){
        const {classes}=this.props;

        return(
            <div className={classes.container}>
                <Card className={classes.card} onClick={this.props.eventGallery ? this.handleRedirect : console.log('no pics')}>
                    <section className={classes.sectionFlex}>
                        <Avatar className={classes.avatar}>{this.provideAvatarText(this.props.eventTitle)}</Avatar>
                        <section className={classes.subSectionFlex}>
                            <Typography component={'h3'} variant={'h3'} style={{lineHeight: 1, alignSelf: 'center'}}>{this.props.eventTitle}</Typography>
                            {/*this.props.eventDate
                                ?
                                    <Typography component={'h6'} variant={'h6'}>{this.props.eventDate}</Typography>
                                :
                                    <br/>
                            */}
                        </section>
                    </section>
                    {this.render_redrect()}
                    <CardMedia className={classes.media} image={this.props.eventCoverImageUrl} title={this.props.eventTitle}/>
                    <CardContent>
                        <Typography gutterBottom variant={'headline'} component='p'>
                            {this.props.eventSubheading}
                        </Typography>
                        <Button className={classes.cardButton} bsSize="xsmall" bsStyle={'link'} onClick={this.props.eventGallery ? this.handleRedirect : console.log('no pics')}>Check out the pics!</Button>
                    </CardContent>
                </Card>
            </div>
        )
    }
}
const GalleryCard = connect(null, mapDispatchToProps)(ConnectedGalleryCard);

GalleryCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GalleryCard);

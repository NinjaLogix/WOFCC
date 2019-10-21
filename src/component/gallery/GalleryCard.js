import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Button } from 'react-bootstrap';
import Avatar from "@material-ui/core/Avatar";
import { Redirect } from 'react-router-dom';
import {Container, StyledCard, SectionFlex, StyledAvatar, SubSectionFlex, GalleryH3, StyledCardMedia, StyledButton} from './GalleryCardStyle';

export const GalleryCard = props => {
    const [redirect, setRedirect] = useState(false);

    const set_redirect = () => setRedirect(true);

    const render_redrect = () => {
        if (redirect){
            return <Redirect push={'/recent-events'} to={'/gallery-view'}/>
        }
    };

    const handleRedirect = props =>{
        console.log('handle redirect props', props);
        props.set_gallery(props.eventGallery);
        set_redirect()
    };

    const provideAvatarText = title_explicit => {
        let tempArr = [];
        title_explicit.split(' ').forEach(word =>
            tempArr.push(word.split(/(?=[a-z])/)[0].toUpperCase())
        );
        return tempArr[0] + tempArr[tempArr.length-1];
    }

    return(
        <Container>
            <StyledCard onClick={() => handleRedirect(props)}>
                <SectionFlex>
                    <StyledAvatar>{provideAvatarText(props.eventTitle)}</StyledAvatar>
                    <SubSectionFlex>
                        <GalleryH3>{props.eventTitle}</GalleryH3>
                    </SubSectionFlex>
                </SectionFlex>
                {render_redrect()}
                <StyledCardMedia image={props.eventCoverImageUrl} title={props.eventTitle}/>
                <CardContent>
                    <Typography gutterBottom variant={'headline'} component='p'>
                        {props.eventSubheading}
                    </Typography>
                    <StyledButton bsSize="xsmall" bsStyle={'link'} onClick={() => handleRedirect(props)}>Check out the pics!</StyledButton>
                </CardContent>
            </StyledCard>
        </Container>
    )
}

GalleryCard.propTypes = {
    eventCoverImageUrl: PropTypes.string,
    eventTitle: PropTypes.string,
    eventSubheading: PropTypes.string,
    eventDate: PropTypes.string,
    eventGallery: PropTypes.array
}

GalleryCard.defaultProps = {
    eventTitle: 'Sample Title',
    eventCoverImageUrl: '#'
}
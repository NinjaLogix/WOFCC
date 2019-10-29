import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Redirect} from 'react-router-dom';
import {Container, StyledCard, SectionFlex, StyledAvatar, SubSectionFlex, GalleryH3, StyledCardMedia, StyledButton} from './GalleryCardStyle';

export const GalleryCard = props => {
    const [redirect, setRedirect] = useState(false);

    const provideAvatarText = title_explicit => {
        let tempArr = [];
        title_explicit.split(' ').forEach(word =>
            tempArr.push(word.split(/(?=[a-z])/)[0].toUpperCase())
        );
        return tempArr[0] + tempArr[tempArr.length-1];
    }

    if (redirect){
        return <Redirect to={{pathname: '/gallery-view', state: {gallery_context: props.eventGallery}}}/>
    }
    else {
        return(
            <Container onClick={() => setRedirect(true)}>
                <StyledCard onClick={() => setRedirect(true)}>
                    <SectionFlex>
                        <StyledAvatar>{provideAvatarText(props.eventTitle)}</StyledAvatar>
                        <SubSectionFlex>
                            <GalleryH3>{props.eventTitle}</GalleryH3>
                        </SubSectionFlex>
                    </SectionFlex>
                    <StyledCardMedia image={props.eventCoverImageUrl} title={props.eventTitle}/>
                    <CardContent>
                        <Typography gutterBottom variant={'headline'} component='p'>
                            {props.eventSubheading}
                        </Typography>
                    </CardContent>
                </StyledCard>
            </Container>
        )
    }
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
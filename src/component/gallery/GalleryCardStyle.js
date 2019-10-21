import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from "@material-ui/core/Avatar";
import { Button } from 'react-bootstrap';

export const Container = styled.div`
    padding: 2%;
`;

export const StyledCard = styled(Card)`
    max-width: 300px;
    min-width: 50px;
    padding-bottom: 10px;
    min-height: 400px;
    max-height: 400px;
`;

export const StyledCardMedia = styled(CardMedia)`
    min-height: 20px;
    padding-top: 56.25%;
`;

export const SectionFlex = styled.section`
    width: 100%;
    display: inline-flex;
`;

export const SubSectionFlex = styled.section`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-context: center;
    justify-content: flex-start;
`;

export const StyledAvatar = styled(Avatar)`
    margin: 10px;
    background-color: green;
`;

export const GalleryH3 = styled.h3`
    line-height: 1;
    align-self: center;
`;

export const StyledButton = styled(Button)`
    align: center;
`;
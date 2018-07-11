import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
};

const WebCard = ({props}) => {
    const { classes } = props;
    return(
        <div>
            <Card className={classes.card}>
                <CardMedia className={classes.media} image={require(`../resources/freepik/${props.image}`)}
                           title={'New Member Classes'}/>
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        {props.headline}
                    </Typography>
                    <Typography component={'p'}>
                        {props.context}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

WebCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WebCard);
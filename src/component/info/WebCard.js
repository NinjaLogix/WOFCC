import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        minWidth: 100,
        maxWidth: 200,
        minHeight: 350,
        maxHeight: 350,
        paddingBottom: 10
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    }
};

class WebCard extends React.Component{
    static propTypes = {
        headline: PropTypes.string,
        image: PropTypes.string,
        context: PropTypes.string
    };

    static defaultProps = {
      headline: 'This is a headline',
      image: '12.jpg',
      context: 'This is the context'
    };

    render(){
        const { classes } = this.props;

        return(
            <div>
                <Card className={classes.card}>
                    <CardMedia className={classes.media} image={this.props.image}
                               title={this.props.headline}/>
                    <CardContent>
                        <Typography gutterBottom variant={'display1'} component="h2">
                            {this.props.headline}
                        </Typography>
                        {this.props.context && 
                            <section dangerouslySetInnerHTML={{__html: this.props.context}}/>
                        }
                    </CardContent>
                </Card>
            </div>
        );
    }
}

WebCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WebCard);

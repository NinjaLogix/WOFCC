import React from 'react';
import Lightbox from 'react-images';
import { connect } from 'react-redux';
import Gallery from 'react-photo-gallery';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {Redirect} from "react-router-dom";
import Measure from 'react-measure';

const mapStateToProps = state => {
    return { gallery_context: state.gallery_context }
};

const styles = {
    fail_container: {
        marginTop:100,
        width:'70%',
        height:'100%'
    },
    container: {
        marginTop:50,
        height:'100%'
    },
    light_bx: {
        width:'70%',
        height:'100%'
    }
};

class ConnectedGalleryView extends React.PureComponent{

    constructor(){
        super();

        this.state = {
            displayGallery: true,
            currentImage: 0,
            redirect: false,
            width: -1
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
    }

    openLightbox(event, obj) {
        this.setState({
            currentImage: obj.index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox() {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious() {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext() {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }

    set_redirect =()=> this.setState({redirect: true});

    render_redrect =()=> { return this.state.redirect ? <Redirect push to={'/recent-events'}/> : null; };

    render(){
        const width = this.state.width;
        const {classes}=this.props;

        return(
            <div>
                {this.state.displayGallery
                    ?
                        <Measure bounds onResize={(contentReact) => this.setState({width: contentReact.bounds.width})}>
                            {({measureRef}) => {
                                if (width<1){ return <div ref={measureRef}></div>; }

                                let columns = 1;

                                if (width >= 480){ columns=3; }
                                if(width >= 1024){ columns=4; }
                                if(width >= 1824){ columns=5; }

                                return  <div className={classes.container}>
                                            <Gallery photos={this.props.gallery_context} columns={columns} onClick={this.openLightbox}/>
                                            <Lightbox images={this.props.gallery_context}
                                                      onClose={this.closeLightbox}
                                                      onClickPrev={this.gotoPrevious}
                                                      onClickNext={this.gotoNext}
                                                      currentImage={this.state.currentImage}
                                                      isOpen={this.state.lightboxIsOpen}
                                            />
                                        </div>
                                }
                            }
                        </Measure>
                    :
                        <div className={classes.fail_container}>
                            {this.render_redrect()}
                            {this.set_redirect()}
                            <p>This gallery is empty</p>
                        </div>
                }
            </div>
        )
    };
}

const GalleryView = connect(mapStateToProps)(ConnectedGalleryView);

GalleryView.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GalleryView);

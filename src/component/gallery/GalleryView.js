import React, {useState, useEffect} from 'react';
import Lightbox from 'react-images';
import Gallery from 'react-photo-gallery';
import {Redirect} from "react-router-dom";
import Measure from 'react-measure';
import {FailContainer, Container, MenuContainer} from './GalleryViewStyle';
import {Menu} from '../../component/navigation/menu';

const GalleryView = function(props){
    const [images, setImages] = useState([]);
    const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);
    const [redirect, setRedirect] = useState(false);
    const [width, setWidth] = useState(-1);

    const openLightbox = (event, obj) => {
        setCurrentImage(obj.index);
        setLightboxIsOpen(true);
    }

    const closeLightbox = () => {
        setCurrentImage(0);
        setLightboxIsOpen(false);
    }

    const gotoPrevious = () => setCurrentImage(currentImage - 1);

    const gotoNext = () => setCurrentImage(currentImage + 1);

    const set_redirect = () => setRedirect(true);

    const render_redirect = () => redirect ? <Redirect push to={'/recent-events'}/> : null;

    useEffect(() => {
        setImages(props.location.state.gallery_context);
    }, []);

    return (
        <div>
            <MenuContainer>
                <Menu/>
            </MenuContainer>
            {props.location.state.gallery_context.length > 0
                ?
                    <Measure bounds onResize={(contentReact) => setWidth(contentReact.bounds.width)}>
                        {({measureRef}) => {
                            if (width<1){ return <div ref={measureRef}></div>; }

                            let columns = 1;

                            if (width >= 480){ columns=3; }
                            if(width >= 1024){ columns=4; }
                            if(width >= 1824){ columns=5; }

                            return  <Container>
                                        <Gallery photos={images} columns={columns} onClick={openLightbox}/>
                                        <Lightbox images={images}
                                                  onClose={closeLightbox}
                                                  onClickPrev={gotoPrevious}
                                                  onClickNext={gotoNext}
                                                  currentImage={currentImage}
                                                  isOpen={lightboxIsOpen}
                                        />
                                    </Container>
                            }
                        }
                    </Measure>
                :
                    <FailContainer>
                        {render_redirect()}
                        {set_redirect()}
                        <p>This gallery is empty</p>
                    </FailContainer>
            }
        </div>
    )
}

export default GalleryView;

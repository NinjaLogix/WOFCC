import React, {useState, useEffect} from 'react';
import Lightbox from 'react-images';
import Gallery from 'react-photo-gallery';
import {Redirect} from "react-router-dom";
import Measure from 'react-measure';
import {FailContainer, Container, MenuContainer} from './GalleryViewStyle';
import {Menu} from '../../component/navigation/menu';

const GalleryView = function(props){
    const [displayGallery, setDisplayGallery] = useState(true);
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

// class GalleryView extends React.PureComponent{

//     constructor(){
//         super();

//         this.state = {
//             displayGallery: true,
//             images: [],
//             currentImage: 0,
//             redirect: false,
//             width: -1
//         };

//         this.closeLightbox = this.closeLightbox.bind(this);
//         this.openLightbox = this.openLightbox.bind(this);
//         this.gotoNext = this.gotoNext.bind(this);
//         this.gotoPrevious = this.gotoPrevious.bind(this);
//     }

//     openLightbox(event, obj) {
//         this.setState({
//             currentImage: obj.index,
//             lightboxIsOpen: true,
//         });
//     }
//     closeLightbox() {
//         this.setState({
//             currentImage: 0,
//             lightboxIsOpen: false,
//         });
//     }
//     gotoPrevious() {
//         this.setState({
//             currentImage: this.state.currentImage - 1,
//         });
//     }
//     gotoNext() {
//         this.setState({
//             currentImage: this.state.currentImage + 1,
//         });
//     }

//     set_redirect = () => this.setState({redirect: true});

//     render_redrect = () => { return this.state.redirect ? <Redirect push to={'/recent-events'}/> : null; };

//     componentDidMount(){
//         this.setState({images: this.props.location.state.gallery_context});
//     }

//     render(){
//         const width = this.state.width;
//         const {images} = this.state;

//         return(
//             <div>
//                 {this.props.location.state.gallery_context.length > 0
//                     ?
//                         <Measure bounds onResize={(contentReact) => this.setState({width: contentReact.bounds.width})}>
//                             {({measureRef}) => {
//                                 if (width<1){ return <div ref={measureRef}></div>; }

//                                 let columns = 1;

//                                 if (width >= 480){ columns=3; }
//                                 if(width >= 1024){ columns=4; }
//                                 if(width >= 1824){ columns=5; }

//                                 return  <Container>
//                                             <Gallery photos={images} columns={columns} onClick={this.openLightbox}/>
//                                             <Lightbox images={images}
//                                                       onClose={this.closeLightbox}
//                                                       onClickPrev={this.gotoPrevious}
//                                                       onClickNext={this.gotoNext}
//                                                       currentImage={this.state.currentImage}
//                                                       isOpen={this.state.lightboxIsOpen}
//                                             />
//                                         </Container>
//                                 }
//                             }
//                         </Measure>
//                     :
//                         <FailContainer>
//                             {this.render_redrect()}
//                             {this.set_redirect()}
//                             <p>This gallery is empty</p>
//                         </FailContainer>
//                 }
//             </div>
//         )
//     };
// }

export default GalleryView;

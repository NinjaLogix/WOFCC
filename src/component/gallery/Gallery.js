import React, { useState, useEffect, useContext } from 'react';
import { Menu } from '../navigation/menu';
import { Footer } from '../navigation/footer';
import { Header, StyledImage, StyledAppBar, DisplayImage } from './style/GalleryStyle';
import { config } from '../../config/config';
import { WofccContext } from '../context/WofccContext';
import { Grid, Dialog, Slide, Toolbar, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

export const Gallery = ({ match }) => {
  const [api] = useContext(WofccContext);
  const [pics, setPics] = useState([]);
  const [open, setOpen] = useState(false);
  const [imageToShow, setImageToShow] = useState({id: '', url: ''});

  const handleDialogState = () => setOpen(!open);

  const showImage = (id) => {
    setImageToShow(pics[id]);
    handleDialogState();
  }

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const GalleryDialog = () => (
    <Dialog fullScreen open={open} onClose={handleDialogState} TransitionComponent={Transition}>
      <StyledAppBar>
        <Toolbar>
          <IconButton edge={'start'} color={'inherit'} onClick={handleDialogState}>
            <CloseIcon/>
          </IconButton>
        </Toolbar>
      </StyledAppBar>
      <DisplayImage src={imageToShow.url} alt={''}/>
    </Dialog>
  )

  useEffect(() => {
    const looking = async id => {
      const [gallery] = await api.sanity_query(api.singleton, { query: config.sanity_queries.single_album(id) });

      setPics([...gallery.imageGallery.map((e, index) => ({id: index, url: e.url}))]);
    };

    if (match.params.id)
      looking(match.params.id);
  }, [match]);

  return (
    <div>
      <GalleryDialog/>

      <Header>
        <Menu/>
      </Header>

      <Grid container spacing={3}>
        {pics.length >= 1 && pics.map(p => (
          <Grid key={p.id} item xs onClick={() => showImage(p.id)}>
            <StyledImage src={p.url} alt={'img'}/>
          </Grid>
        ))}
      </Grid>
      <Footer/>
    </div>
  );
};
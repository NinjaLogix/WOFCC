import React, {useState, useEffect} from 'react';
import GalleryCard from '../../component/gallery/GalleryCard';
import {EXT_REGEX} from '../../script/appContext';
import {dropBox} from '../../component/api';
import {fixUrl} from '../../util';
import {css} from '@emotion/core';
import {BarLoader} from 'react-spinners';
import {Menu} from '../../component/navigation/menu';
import {Footer} from '../../component/navigation/footer';
import {Wrapper, Header, FlexBox, SpinnerBox} from './RecentEventsStyle';

export default function Events(props){
    const [galleryCards, setGalleryCards] = useState([]);
    const [galleryContexts, setGalleryContexts] = useState([]);
    const [confObjs, setConfObjs] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [loading, setLoading] = useState(true);

    const override = css`
        display: block;
        margin: 0 auto;
        border-color: red;
    `;

    const handleTopLevelFolders = async () => {
        let response = await dropBox.filesListFolder({path: process.env.REACT_APP_GALLERY_PATH, recursive:true});
        let galleryPaths = [];

        response.entries.forEach(entry=>{
           if (entry['.tag'] === 'file' && entry.name === process.env.REACT_APP_GALLERY_CONF){
               console.log('entry.name', entry.path_display);
               let confUrl = handleShareLinks(entry.path_display, entry.name);
               confUrl.then(configurationUrl => {
                  let tempValue = {
                      confLink: configurationUrl,
                      confPath: '/' + entry.path_display.split('/')[1] + '/' + entry.path_display.split('/')[2],
                      urls: [],
                      data: []
                  };

                  galleryPaths.push(tempValue);

                  handleImageLinks(tempValue);
               });
           }
        });
    };
    const handleShareLinks = async (path) => {
        let temp = await dropBox.sharingListSharedLinks({path: path});

        if (temp.links.length <= 0){
            return '#'
        } else {
            return temp.links[0].url;
        }
    };
    const handleImageLinks = async (pathObj) => {
        let response = await dropBox.filesListFolder({path: pathObj.confPath});
        let urls = [];
        let tempUrlObj = {src: '', width: 1, height: 1};

        response.entries.forEach(entry => {
            if (EXT_REGEX.test(entry.name)){
                let link = handleSharedLink(entry.path_display);
                link.then(thing => {
                    tempUrlObj = {src: fixUrl(thing), width: provideWidthHieght('width'), height: 4};
                    urls.push(tempUrlObj);
                })
            }
        });

        pathObj.urls = urls;

        setupGalleryCards(pathObj);
    };
    const setupGalleryCards = (galleryObj) => {
        //shhh this is janky, I know
        let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
        let txtFile = new XMLHttpRequest();

        if (galleryObj.confLink !== undefined) {
            txtFile.open("GET", fixUrl(galleryObj.confLink), true);
            txtFile.onreadystatechange = () => {
                if (txtFile.readyState === 4) {
                    if (txtFile.status === 200) {
                        galleryObj.data = txtFile.responseText.split("\n");

                        let title = galleryObj.data[0].split(':')[1];       //GalleryCard -> eventTitle
                        let date = galleryObj.data[1].split(':')[1];        //GalleryCard -> eventDate
                        let subheading = galleryObj.data[2].split(':')[1];  //GalleryCard -> eventSubheading
                        let coverUrl = fixUrl(galleryObj.data[3].split(':')[1] + ':' + galleryObj.data[3].split(':')[2]);    //GalleryCard -> eventCoverImageUrl

                        const galleryCard = <GalleryCard eventTitle={title}
                                                         eventSubheading={subheading}
                                                         eventDate={date}
                                                         eventCoverImageUrl={coverUrl}
                                                         eventGallery={galleryObj.urls}/>;

                        setGalleryCards(prevGalleryCards => [...prevGalleryCards, galleryCard]);

                        setLoading(false);
                    }
                }
            };
            txtFile.send(null);
        }
    };
    const handleSharedLink = async (path) => {
        let urls = await dropBox.sharingListSharedLinks({path: path});

        if (urls.links.length === 0){
            dropBox.sharingCreateSharedLinkWithSettings({
                path: path,
                settings: {requested_visibility: {'.tag': 'public'}}
            });
        }

        return urls.links[0].url;
    };
    const provideWidthHieght = (mode) => {
        return Math.floor((Math.random() * 4) + 3);
    };

    useEffect(() => {
        if (!loaded){
            handleTopLevelFolders();
        }
        return () => {
            if (!loaded){
                setLoaded(true);
            }
        }
    }, []);

    return(
        <Wrapper>
            <Header>
                <Menu/>
                <h3>A few of our recent and upcoming events</h3>
            </Header>
            <FlexBox>
                {loading
                    ?
                        <SpinnerBox>
                            <div>
                                <BarLoader
                                    css={override}
                                    sizeUnit={"px"}
                                    size={150}
                                    color={'#123abc'}
                                    loading={loading}
                                />
                            </div>
                        </SpinnerBox>
                    :
                        galleryCards
                }
            </FlexBox>
            
            {!loading && 
                <Footer/>
            }
        </Wrapper>
    )
}
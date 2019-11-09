import React, {useState, useEffect} from 'react';
import {GalleryCard} from '../../component/gallery/GalleryCard';
import {dropBox} from '../../component/api';
import {fixUrl, readConfig} from '../../util';
import {css} from '@emotion/core';
import {BarLoader} from 'react-spinners';
import {Menu} from '../../component/navigation/menu';
import {Footer} from '../../component/navigation/footer';
import {Wrapper, Header, FlexBox, SpinnerBox} from './EventsStyle';
import uuidv1 from "uuid";

export const Events = function(props){
    const [loading, setLoading] = useState(true);
    const [galleries, setGalleries] = useState([]);

    const EXT_REGEX = RegExp(process.env.REACT_APP_REGEX_EXT);

    const override = css`
        display: block;
        margin: 0 auto;
        border-color: red;
    `;

    const handleTopLevelFolders = async () => {
        let response = await dropBox.filesListFolder({path: process.env.REACT_APP_GALLERY_PATH, recursive:true});

        for (let entry of response.entries){
            if (entry['.tag'] === 'folder' && entry.name !== 'gallery'){
                console.log('galleries');

                //get conf object for this folder
                const configPath = `${entry.path_lower}/${process.env.REACT_APP_GALLERY_CONF}`;
                const shareLink = await handleShareLinks(configPath);
                const configuration = await readConfig(shareLink);

                //then get images for this folder
                const files = await handleImageLinks(entry.path_lower);

                //finally setup the gallery card
                /*
                    0: "title;Our New Building"
                    1: "date;April 7, 2019"
                    2: "subheading;Thank God! We aquired our new building. These are pictures for beore and after our changes..."
                    3: "coverUrl;https://www.dropbox.com/s/yz219ebugbnmly0/IMG_20190602_093402.jpg?dl=0"
                */
                setGalleries(prevGalleries => [...prevGalleries,
                    <GalleryCard 
                        key={uuidv1()}
                        eventTitle={configuration[0].split(';')[1]}
                        eventSubheading={configuration[2].split(';')[1]}
                        eventDate={configuration[1].split(';')[1]}
                        eventCoverImageUrl={fixUrl(configuration[3].split(';')[1])}
                        eventGallery={files}
                    />
                ])
            }
        }

        setLoading(false);
    };

    const handleShareLinks = async (path) => {
        let temp = await dropBox.sharingListSharedLinks({path: path});

        return temp.links.length <= 0 ? '#' : temp.links[0].url;
    };

    const handleImageLinks = async path => {
        const response = await dropBox.filesListFolder({path: path});
        const links = [];

        for (const entry of response.entries){
            if (EXT_REGEX.test(entry.name)){
                const link = await handleSharedLink(entry.path_display);
                links.push({src: link, width: 4, height: 4});
            }
        }
        
        return links;
    };

    const handleSharedLink = async (path) => {
        let urls = await dropBox.sharingListSharedLinks({path: path});

        if (urls.links.length === 0){
            dropBox.sharingCreateSharedLinkWithSettings({
                path: path,
                settings: {requested_visibility: {'.tag': 'public'}}
            });
        }

        return fixUrl(urls.links[0].url);
    };

    useEffect(() => {
        handleTopLevelFolders();
    }, []);

    return(
        <Wrapper>
            <Header>
                <Menu/>
                <h2>A few of our events</h2>
            </Header>
            <FlexBox>
                {!loading
                    ?
                        galleries
                    :
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
                }
            </FlexBox>
            
            {!loading && 
                <Footer/>
            }
        </Wrapper>
    )
}
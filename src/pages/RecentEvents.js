import React from 'react';
import GalleryCard from '../component/GalleryCard';
import '../style/wofcc_master.css'
import {change_page} from "../redux-def/actions";
import connect from "react-redux/es/connect/connect";
import { dropBox, fixUrl, EXT_REGEX } from '../script/appContext';

const mapDispatchToProps = dispatch => {
    return{
        change_page: page => dispatch(change_page(page))
    };
};

class ConnectedRecentEvents extends React.PureComponent{
    constructor(){
        super();
        this.state = {
            page: '',
            galleryCards: [],
            galleryContexts: [],
            confObjs:[],
            loading: true
        }
    }

    async handleTopLevelFolders(){
        let response = await dropBox.filesListFolder({path: process.env.REACT_APP_GALLERY_PATH, recursive:true});
        let galleryPaths = [];

        response.entries.forEach(entry=>{
           if (entry['.tag'] === 'file' && entry.name === process.env.REACT_APP_GALLERY_CONF){
               console.log('entry.name', entry.path_display);
               let confUrl = this.handleShareLinks(entry.path_display, entry.name);
               confUrl.then(configurationUrl => {
                  let tempValue = {
                      confLink: configurationUrl,
                      confPath: '/' + entry.path_display.split('/')[1] + '/' + entry.path_display.split('/')[2],
                      urls: [],
                      data: []
                  };

                  galleryPaths.push(tempValue);

                  this.handleImageLinks(tempValue);
               });
           }
        });
    };

    async handleShareLinks(path){
        let temp = await dropBox.sharingListSharedLinks({path: path});

        if (temp.links.length <= 0){
            return '#'
        } else {
            return temp.links[0].url;
        }
    }

    async handleImageLinks(pathObj){
        let response = await dropBox.filesListFolder({path: pathObj.confPath});
        let urls = [];
        let tempUrlObj = {src: '', width: 1, height: 1};

        response.entries.forEach(entry => {
            if (EXT_REGEX.test(entry.name)){
                let link = this.handleSharedLink(entry.path_display);
                link.then(thing => {
                    tempUrlObj = {src: fixUrl(thing), width: this.provideWidthHieght('width'), height: 4};
                    urls.push(tempUrlObj);
                })
            }
        });

        pathObj.urls = urls;

        this.setupGalleryCards(pathObj);
    }

    setupGalleryCards = (galleryObj) => {
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

                        this.setState(prevState => ({
                            galleryCards: [...prevState.galleryCards, galleryCard]
                        }));
                    }
                }
            };
            txtFile.send(null);
        }
    };

    async handleSharedLink(path){
        let urls = await dropBox.sharingListSharedLinks({path: path});

        if (urls.links.length === 0){
            dropBox.sharingCreateSharedLinkWithSettings({
                path: path,
                settings: {requested_visibility: {'.tag': 'public'}}
            });
        }

        return urls.links[0].url;
    }

    provideWidthHieght(mode){
        return Math.floor((Math.random() * 4) + 3);
    }

    componentWillMount(){
        this.handleTopLevelFolders();
    }

    componentDidMount(){
        this.props.change_page('recent_events');
    }

    render(){
        return(
            <div className={'events-container'}>
                <div className={'events-header'}>
                    <h3>A few of our recent events</h3>
                </div>
                <div className={'events-flexbox'}>
                    {this.state.galleryCards}
                </div>

            </div>
        )
    };
}

const RecentEvents = connect(null, mapDispatchToProps)(ConnectedRecentEvents);

export default RecentEvents;

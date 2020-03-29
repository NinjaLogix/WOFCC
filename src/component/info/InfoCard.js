import React, {useState} from 'react';
import {InfoWrapper, ImgSection, TextSection} from './InfoStyle';
import {InfoModal} from './InfoModal';
import {convertMarkdown} from '../../util';

export const InfoCard = ({src, title, text, detail}) => {
    const text_limit = 200;
    const [useExpanded] = useState(text.length >= text_limit);
    const [open, setOpen] = useState(false);

    const concatText = text => `${text.substring(0, text_limit)}....`;

    const handleClick = e => setOpen(!open)

    return (
        <InfoWrapper 
            elevation={3} 
            onClick={handleClick}
            expanded={useExpanded}>

            {useExpanded && 
                <InfoModal open={open} setOpen={setOpen} title={title} text={detail} img={src}/>
            }

            <ImgSection src={src}/>
            <TextSection>
                <section>
                    <h2>{title}</h2>
                </section>
                {useExpanded
                    ?
                        <section dangerouslySetInnerHTML={{__html: convertMarkdown(concatText(text))}}/>
                    :
                        <section dangerouslySetInnerHTML={{__html: convertMarkdown(text)}}/>
                }
            </TextSection>
        </InfoWrapper>
    )
}
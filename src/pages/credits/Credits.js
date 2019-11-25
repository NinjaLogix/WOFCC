import React, {useState} from 'react';
import uuidv1 from 'uuid';
import {Wrapper, CreditList, ListWrapper} from './CreditsStyle';
import {Menu} from '../../component/navigation/menu';
import {Footer} from '../../component/navigation/footer';
import {Link, Redirect} from 'react-router-dom';

export const Credits =  function(props){
    const [freepik] = useState([
        {key: uuidv1(), img_desc: 'background', link_text: 'Designed by Kjpargeter / Freepik', link: 'http://www.freepik.com/kjpargeter'},
        {key: uuidv1(), img_desc: 'New Members Classes', link_text: 'Designed by ijeab / Freepik', link: 'http://www.freepik.com/ijeab'},
        {key: uuidv1(), img_desc: 'Childrens Ministry', link_text: 'Designed by brgfx / Freepik', link: 'http://www.freepik.com/brgfx'},
        {key: uuidv1(), img_desc: 'Worship Service', link_text: 'Designed by onlyyouqj / Freepik', link: 'http://www.freepik.com/onlyyouqj'},
        {key: uuidv1(), img_desc: 'Corporate Confession', link_text: 'Designed by ijeab / Freepik', link: 'http://www.freepik.com/ijeab'},
        {key: uuidv1(), img_desc: 'background', link_text: 'Designed by Bedneyimages / Freepik', link: 'http://www.freepik.com/bedneyimages'},
        {key: uuidv1(), img_desc: 'Pastoral Care', link_text: 'Designed by ijeab / Freepik', link: 'http://www.freepik.com/ijeab'},
        {key: uuidv1(), img_desc: 'green_background', link_text: 'Designed by Freepik', link: 'http://www.freepik.com/'},
        {key: uuidv1(), img_desc: 'background', link_text: 'Designed by GarryKillian / Freepik', link: 'http://www.freepik.com/GarryKillian'},
        {key: uuidv1(), img_desc: 'Children’s Ministry', link_text: 'Designed by brgfx / Freepik', link: 'http://www.freepik.com/brgfx'},
        {key: uuidv1(), img_desc: 'Media Ministry', link_text: 'Designed by jcomp / Freepik', link: 'http://www.freepik.com/jcomp'},
        {key: uuidv1(), img_desc: 'Hospitality', link_text: 'Designed by Mrsiraphol / Freepik', link: 'http://www.freepik.com/Mrsiraphol'},
        {key: uuidv1(), img_desc: 'Couples in covenant', link_text: 'Designed by Freepic.diller / Freepik', link: 'http://www.freepik.com/Freepic.diller'},
        {key: uuidv1(), img_desc: 'Youth Ministry', link_text: 'Designed by Kjpargeter / Freepik', link: 'http://www.freepik.com/kjpargeter'},
        {key: uuidv1(), img_desc: 'Greeters', link_text: 'Designed by Freepik', link: 'http://www.freepik.com/'},
        {key: uuidv1(), img_desc: 'bridge connectors', link_text: 'Designed by Vectorarte / Freepik', link: 'http://www.freepik.com/Vectorarte'},
        {key: uuidv1(), img_desc: 'free worshipers', link_text: 'Designed by kjpargeter / Freepik', link: 'http://www.freepik.com/kjpargeter'},
        {key: uuidv1(), img_desc: 'background', link_text: 'Designed by Kjpargeter / Freepik', link: 'http://www.freepik.com/kjpargeter'}
    ]);

    return (
        <Wrapper>
            <Menu/>

            <ListWrapper>
                <CreditList>
                    {freepik.map((pik, index) => (
                        <li key={index}>
                            <a target="_blank" href={pik.link}>{pik.img_desc} Images {pik.link_text}</a>
                        </li>
                    ))}
                    <li><a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@benwhitephotography?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Ben White"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Ben White</span></a></li>
                    <li><a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@priscilladupreez?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Priscilla Du Preez"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Priscilla Du Preez</span></a></li>
                </CreditList>
            </ListWrapper>

            <Footer/>
        </Wrapper>
    )
}
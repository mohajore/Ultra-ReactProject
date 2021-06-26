import axios from 'axios';
import React,{useState,useEffect} from 'react';
import {SocialMedia,
  SocialMediaSocail,
  Icon,
  SocialP,
  SocialPSpan,
  } from './style'
const SocialMeadia = ()=> {

  const [Social,setSocial] =useState([])

  useEffect ( ()=> {axios.get("./js/data.json").then( res => setSocial(res.data.social) )},[])

  const SocialMap =  Social.map(SocialItem => {
      return (
        <SocialMediaSocail id={SocialItem.id} key={SocialItem.id}>
        <Icon className={SocialItem.icon}></Icon>
        <SocialP>
            <SocialPSpan className="info1">{SocialItem.title}</SocialPSpan>
            <SocialPSpan abc>{SocialItem.body}</SocialPSpan>
        </SocialP>
    </SocialMediaSocail>
      )
  })


  return (
    <SocialMedia>
            
    {SocialMap}
</SocialMedia>

  );
}

export default SocialMeadia;

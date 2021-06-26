import axios from 'axios';
import React,{useState,useEffect} from 'react';
import {Portfolioo,PortfolioTitle,Span,PortfolioList,PortfolioListItem,Box,BoxImg,Overlay,
  OverlaySpan} from './style.js'
const Portfolio = ()=> {

  const [images,setImage] =useState([])

  useEffect ( () =>{
    axios.get("js/data.json").then( res => (setImage(res.data.portfolio)))
  },[])
  
  const portfolioImages =  images.map( imageItem => {
    console.log(imageItem.image);
    return (
      <Box key={imageItem.id}>
            <BoxImg src={imageItem.image} alt=""/>
            <Overlay>
                <OverlaySpan>
                    Show Image
                </OverlaySpan>
            </Overlay>
        </Box>
    )
  })
  return (
    <Portfolioo>
    <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
    <PortfolioList>
        <PortfolioListItem active  >All</PortfolioListItem>
        <PortfolioListItem >HTML</PortfolioListItem>
        <PortfolioListItem >Photoshop</PortfolioListItem>
        <PortfolioListItem >Wordpress</PortfolioListItem>
        <PortfolioListItem >Mobile</PortfolioListItem>
    </PortfolioList>
    
    <div className="box">
        {portfolioImages}      
    </div>
    
</Portfolioo>
  );
}

export default Portfolio;

import React from 'react';
import {HomeSection,HomeInformation,HomeTitle,Homeinfo,HomeDesc,HomeDescSpan,HomeBtn} from './style.js'

const Home = ()=> {
  return (
    <HomeSection>
            <div className="container">
                <HomeInformation>
                    <HomeTitle>Mohammad Dok</HomeTitle>
                    <Homeinfo>Creative Director</Homeinfo>
                    <HomeDesc>
                        Iam a professional <HomeDescSpan>UX Designer</HomeDescSpan> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                    </HomeDesc>
                    <HomeBtn>Let's Begin</HomeBtn>
                </HomeInformation>
            </div>
        </HomeSection>
  );
}

export default Home;

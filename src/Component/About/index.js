import React from 'react';
import {Creative,
  CreativeInfo,
  CreativeInfotitle,
  CreativeInfotitleSpan,
  InfoDir,
  InfoDesc,
  InfoDescAnchor} from './style'
const About = ()=> {
  return (
    <Creative>
            <div className="container">
                <CreativeInfo>
                    <CreativeInfotitle><CreativeInfotitleSpan>This is</CreativeInfotitleSpan> Me</CreativeInfotitle>
                    <InfoDir>Creative Director</InfoDir>
                    <InfoDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <InfoDescAnchor href="#">explicabo</InfoDescAnchor> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </InfoDesc>
                    <InfoDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </InfoDesc>
                </CreativeInfo>
            </div>
        </Creative>
  );
}

export default About;

import React, { Component } from 'react';
import {WorkSection,WorkTitle,WorkTitleSpan,WorkPart,WorkIcon,PartTitle,Line,PartDesc} from './style.js'
import axios from 'axios';
class Work extends Component{

    state = {
        works: []
    };

    componentDidMount(){
        axios.get("./js/data.json").then(res => this.setState({works: res.data.works}) )
    };
    render(){

        const {works} = this.state
        const worksList = works.map(WorkItem => { return (
            < WorkPart first={WorkItem.id} key={WorkItem.id}>
            <WorkIcon className={WorkItem.icon_name}></WorkIcon>
            <PartTitle>{WorkItem.title}</PartTitle>
            <Line/>
            <PartDesc>
            {WorkItem.body}   </PartDesc>
        </WorkPart>
        )    }      
            )

  return (
    <WorkSection>
    <div className="container">
        <WorkTitle><WorkTitleSpan>My</WorkTitleSpan> Work</WorkTitle>
        {worksList}
        
      </div>
     </WorkSection>

)}
}

export default Work;

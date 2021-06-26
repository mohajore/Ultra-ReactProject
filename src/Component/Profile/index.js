import axios from 'axios';
import React,{useState,useEffect} from 'react';
import {ProfileSkills,Profilee,ProfileList,ProfileItem,ProfileSpan,ProfileSpanWeb,Skills,SkillsDesc,Bar,BarTitle,
  BarPerc,BarParent,BarParentSpan,ProfileTitle,SkillsTitle,ProfileTitleSpan,SkillsTitleSpan } from './style.js'
const Profile = ()=> {

    const [profile,setProfile] =useState([])

    useEffect ( ()=> {axios.get("./js/data.json").then( res => setProfile(res.data.profile) )},[])

    const profileMap =  profile.map(item => {
        return (
                   <Bar key={item.id} >
                        <BarTitle>{item.title}</BarTitle>
                        <BarPerc>{item.percentage}</BarPerc>
                        <BarParent>
                            <BarParentSpan  id={item.id}></BarParentSpan>
                        </BarParent>
                    </Bar>
        )
    })

  return (
    <ProfileSkills>
            <div className="container">
                <Profilee>
                    <ProfileTitle><ProfileTitleSpan>My </ProfileTitleSpan>Profile</ProfileTitle>
                    <ProfileList>
                        <ProfileItem>
                            <ProfileSpan>Name</ProfileSpan>
                            Hamza Nabil
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileSpan>Birthday</ProfileSpan>
                            21/1/1996
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileSpan>Address</ProfileSpan>
                            Ain shams
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileSpan>Phone</ProfileSpan>
                            4444 5555 6666
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileSpan>Email</ProfileSpan>
                            hamza@hamza.com
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileSpan>Website</ProfileSpan>
                            <ProfileSpanWeb>www.google.com</ProfileSpanWeb>
                        </ProfileItem>
                    </ProfileList>
                </Profilee>
                
                <Skills>
                    <SkillsTitle>Some <SkillsTitleSpan>skills</SkillsTitleSpan></SkillsTitle>
                    <SkillsDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>
                    {profileMap}
                </Skills>
                
            </div>
        </ProfileSkills>
  );
}

export default Profile;

import React from 'react';
import { Link } from 'react-router-dom';
import {NavBarSection,NavbarLogo,NavbarLogoText,NavbarUlList,
  NavbarListItem,NavbarListItemAnchor,MyNavLink} from './style.js'; 




const NavBar = ()=> {
  return (
    <NavBarSection>
    <div className="container">
                
                <NavbarLogo>
                    <NavbarLogoText>Ultra Profile</NavbarLogoText>
                  </NavbarLogo>
                
              
                
                <NavbarUlList>
                    <NavbarListItem><MyNavLink to='/'>Home</MyNavLink></NavbarListItem>
                    <NavbarListItem><NavbarListItemAnchor href="#">Work</NavbarListItemAnchor></NavbarListItem>
                    <NavbarListItem><NavbarListItemAnchor href="#">Portfolio</NavbarListItemAnchor></NavbarListItem>
                    <NavbarListItem><NavbarListItemAnchor href="#">Resume</NavbarListItemAnchor></NavbarListItem>
                    <NavbarListItem><NavbarListItemAnchor href="#">About</NavbarListItemAnchor></NavbarListItem>
                    <NavbarListItem><MyNavLink  to='/contact'>Contact</MyNavLink></NavbarListItem>
                </NavbarUlList>
                
            </div>
            </NavBarSection>
  );
}

export default NavBar;

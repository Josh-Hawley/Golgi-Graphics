import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {FaYoutube, FaInstagram, FaTwitter, FaLinkedin} from 'react-icons/fa';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink, FooterLogoImage } from './FooterElements';
import { IconContext } from 'react-icons/lib';
import logo_and_text from '../../images/logo and text 2 white.png';

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop()
    }

  return (
    <IconContext.Provider value = {{color: '#fff'}}>
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>

                <FooterLinksWrapper>
                    <FooterLinkItems>

                        <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to='/contact'>Contact</FooterLink>
                            <FooterLink to='/contact'>How it works</FooterLink>
                            <FooterLink to='/contact'>Testimonials</FooterLink>
                            <FooterLink to='/contact'>Terms of service</FooterLink>
                        
                    </FooterLinkItems>

                    <FooterLinkItems>
                        
                        <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to='/contact'>Contact</FooterLink>
                            <FooterLink to='/contact'>How it works</FooterLink>
                            <FooterLink to='/contact'>Testimonials</FooterLink>
                            <FooterLink to='/contact'>Terms of service</FooterLink>
                        
                    </FooterLinkItems>
                </FooterLinksWrapper>

                <FooterLinksWrapper>
                    <FooterLinkItems>

                        <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to='/contact'>Contact</FooterLink>
                            <FooterLink to='/contact'>How it works</FooterLink>
                            <FooterLink to='/contact'>Testimonials</FooterLink>
                            <FooterLink to='/contact'>Terms of service</FooterLink>
                        
                    </FooterLinkItems>

                    <FooterLinkItems>
                        
                        <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to='/contact'>Contact</FooterLink>
                            <FooterLink to='/contact'>How it works</FooterLink>
                            <FooterLink to='/contact'>Testimonials</FooterLink>
                            <FooterLink to='/contact'>Terms of service</FooterLink>
                        
                    </FooterLinkItems>
                </FooterLinksWrapper>

            </FooterLinksContainer>

            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>
                        <FooterLogoImage src={logo_and_text} />
                    </SocialLogo>
                    <WebsiteRights>ink vivo © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                <SocialIcons>
                    <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                        <FaYoutube />
                    </SocialIconLink>
                    <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                        <FaInstagram />
                    </SocialIconLink>
                    <SocialIconLink href="//www.twitter.com/ItsJoshSurely" target="_blank" aria-label="Twitter">
                        <FaTwitter />
                    </SocialIconLink>
                    <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                        <FaLinkedin />
                    </SocialIconLink>
                </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
    </IconContext.Provider>
  )
}

export default Footer

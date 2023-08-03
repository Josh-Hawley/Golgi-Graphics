import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
// import {FaYoutube, FaInstagram, FaTwitter, FaLinkedin} from 'react-icons/fa';
// import { FaTwitter } from 'react-icons/fa';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, FooterLogoImage, EmailLink } from './FooterElements';
import { IconContext } from 'react-icons/lib';
import logo_and_text from '../../images/logo and text 2 white.png';
// import {ReactComponent as LogoText} from '../../images/logo and text dark.svg'

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

                        <FooterLinkTitle>About</FooterLinkTitle>
                            <FooterLink to='/contact'>Contact</FooterLink>
                            <FooterLink to='/contact'>How it works</FooterLink>
                            {/* <FooterLink to='/contact'>Testimonials</FooterLink> */}
                            {/* <FooterLink to='/contact'>Terms of service</FooterLink> */}
                        
                    </FooterLinkItems>

                </FooterLinksWrapper>

                

            </FooterLinksContainer>

            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>
                        <FooterLogoImage src={logo_and_text} />
                        {/* <LogoText style={{maxWidth:'154px'}}/> */}
                    </SocialLogo>
                    <WebsiteRights>Golgi Graphics © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                <SocialIcons>
                    
                    {/* <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                        <FaYoutube />
                    </SocialIconLink> */}
                    
                    {/* <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                        <FaInstagram />
                    </SocialIconLink> */}
                    
                    {/* <SocialIconLink href="//www.twitter.com/ItsJoshSurely" target="_blank" aria-label="Twitter">
                        <FaTwitter />
                    </SocialIconLink> */}
                    {/* <a href="mailto:contact@golgi.graphics">contact@golgi.graphics</a> */}
                    <EmailLink href="mailto:contact@golgi.graphics">contact@golgi.graphics</EmailLink>
                    
                    {/* <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                        <FaLinkedin />
                    </SocialIconLink> */}

                </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
    </IconContext.Provider>
  )
}

export default Footer

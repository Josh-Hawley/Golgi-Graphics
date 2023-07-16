// import React, {useState} from 'react';
import React from 'react';
// import {Button} from '../ButtonElements';
// import { Parallax } from 'react-parallax';
// import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { HeroContainer, HeroContent, HeroP, HeroH1, HeroBtnLink, HeroBtnWrapper, ImageBg, HeroBg} from './HeroElements';
// import Video from '../../videos/video.mp4';
// import astrocyte from '../../images/astrocyte.svg'
import cellArt from '../../images/cell art 2.png'
// import { Parallax} from 'react-scroll-parallax';
import { motion, useScroll, useTransform } from 'framer-motion';


const HeroSection = () => {
    let {scrollYProgress} = useScroll();
    let y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
    // const [hover, setHover] = useState(false);

    // const onHover = () => {
    //     setHover(!hover)
    // };

    return (
        

            
                <HeroContainer id="home">
                
                    
                    <HeroBg>
                        {/* <VideoBg autoPlay loop muted src={Video} type='video/mp4' /> */}
                        
                        <motion.div style={{ y }}>
                            {/* <ImageContainer >  */}
                                <ImageBg src={cellArt} />  
                            {/* </ImageContainer> */}
                        </motion.div>
                        
                        
                        {/* <img src={cellArt} alt="Background" /> */}

                    </HeroBg>

                
                        <HeroContent>
                            
                            <HeroH1>Scientific illustration for publication</HeroH1>
                            <HeroP>Communicate your research with clear, accurate, and visually pleasing graphics.</HeroP>
                        
                            {/* <HeroBtnWrapper>
                                <Button to="/gallery" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                                    Illustrate my research! {hover ?  <ArrowRight /> : <ArrowForward />}
                                </Button>
                            </HeroBtnWrapper> */}
                            {/* <NavBtn>
                                <NavBtnLink to="/contact">Contact</NavBtnLink>
                            </NavBtn> */}
                            <HeroBtnWrapper>
                                <HeroBtnLink to="services" smooth={true} duration={800} spy={true} exact="true" offset={-80}>Illustrate my research</HeroBtnLink>
                            </HeroBtnWrapper>

                        </HeroContent>
                    
                        

                    

                </HeroContainer>
    )
}

export default HeroSection

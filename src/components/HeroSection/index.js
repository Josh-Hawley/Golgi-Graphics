// import React, {useState} from 'react';
import React from 'react';
// import {Button} from '../ButtonElements';
// import { Parallax } from 'react-parallax';
// import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { HeroContainer, HeroContent, HeroP, HeroH1, HeroBtnLink, HeroBtnWrapper, ImageBgBackground, ImageBgVesicles, HeroBg, ImageBgGolgi} from './HeroElements';
// import Video from '../../videos/video.mp4';
// import astrocyte from '../../images/astrocyte.svg'
// import cellArt from '../../images/cell art 2 compressed.jpg'
import artBackground from '../../images/Hero Background/cell art background.jpg';
import artVesicles from '../../images/Hero Background/vesicles.png';
import artGolgi from '../../images/Hero Background/golgi.png';

// import { Parallax} from 'react-scroll-parallax';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';


const HeroSection = () => {
    
    let ref = useRef(null);
    let {scrollYProgress} = useScroll({
        target: ref,
        offset: ["end end", "end start"]
    });
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    // const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
    const vesiclesY = useTransform(scaleX, [0, 1], ['0%', '30%']);
    const golgiY = useTransform(scaleX, [0, 1], ['0%', '60%']);
    // const backgroundRotate = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
    // const vesiclesRotate = useTransform(scrollYProgress, [0, 1], [0, 10]);
    // const golgiRotate = useTransform(scrollYProgress, [0, 1], [0, 180]);
    const vesiclesX = useTransform(scaleX, [0, 1], ['0%', '30%']);

    return (
        

            
                <HeroContainer ref={ref} id="home">
                
                    
                    <HeroBg>
         
                        {/* <motion.div style={{ y: backgroundY }} >
                                <ImageBgBackground src={artBackground} />   
                        </motion.div> */}
                        <motion.div style = {{ y: vesiclesY }}>
                            {/* <motion.div style={{ x: vesiclesX }} >  */}
                                    <ImageBgVesicles src={artVesicles} />  
                            {/* </motion.div> */}
                        </motion.div>
                        

                        <motion.div style={{ x: golgiY }} >
                                <ImageBgGolgi src={artGolgi} />   
                        </motion.div>

                    </HeroBg>

                
                    <HeroContent>
                        
                        <HeroH1>Scientific illustration for publication</HeroH1>
                        <HeroP>Communicate your research with clear, accurate, and visually pleasing graphics.</HeroP>
                    
                        
                        <HeroBtnWrapper>
                            <HeroBtnLink to="services" smooth={true} duration={800} spy={true} exact="true" offset={-80}>Illustrate my research</HeroBtnLink>
                        </HeroBtnWrapper>

                    </HeroContent>
                    
                </HeroContainer>
    )
}

export default HeroSection

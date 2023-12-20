import React from 'react';
import { HeroContainer, HeroContent, HeroP, HeroH1, HeroBtnLink, HeroBtnWrapper, HeroBg, ImageGolgi, ImageVesicle} from './HeroElements';
import vesicle1 from '../../images/Hero Background/vesicle1.png'
import vesicle2 from '../../images/Hero Background/vesicle2.png'
import vesicle3 from '../../images/Hero Background/vesicle3.png'
import vesicle4 from '../../images/Hero Background/vesicle4.png'
import vesicle5 from '../../images/Hero Background/vesicle5.png'
import vesicle6 from '../../images/Hero Background/vesicle6.png'
import golgi from '../../images/Hero Background/golgi corner.png'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';


const HeroSection = () => {
    
    let ref = useRef(null);
    let {scrollYProgress} = useScroll({
        target: ref,
        offset: ["end end", "end start"]
    });

    const scale = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 40,
        restDelta: 0.001
    });

    // const vesicle1Scale = useSpring(scrollYProgress, {
    //     stiffness: 120,
    //     damping: 40,
    //     restDelta: 0.001
    // });

    // const vesicle2Scale = useSpring(scrollYProgress, {
    //     stiffness: 120,
    //     damping: 40,
    //     restDelta: 0.001
    // });

    // const vesicle3Scale = useSpring(scrollYProgress, {
    //     stiffness: 120,
    //     damping: 40,
    //     restDelta: 0.001
    // });

    // const vesicle4Scale = useSpring(scrollYProgress, {
    //     stiffness: 120,
    //     damping: 40,
    //     restDelta: 0.001
    // });

    // const vesicle5Scale = useSpring(scrollYProgress, {
    //     stiffness: 120,
    //     damping: 40,
    //     restDelta: 0.001
    // });

    // const vesicle6Scale = useSpring(scrollYProgress, {
    //     stiffness: 120,
    //     damping: 40,
    //     restDelta: 0.001
    // });


    const golgiX = useTransform(scale, [0, 1], ['0vw', '8vw']);
    const golgiY = useTransform(scale, [0, 1], ['99vh', '110vh']);

    const vesicle1X = useTransform(scale, [0, 1], ['30vw', '65vw']);
    const vesicle1Y = useTransform(scale, [0, 1], ['80vh', '90vh']);

    const vesicle2X = useTransform(scale, [0, 1], ['0vw', '50vw']);
    const vesicle2Y = useTransform(scale, [0, 1], ['90vh', '90vh']);

    const vesicle3X = useTransform(scale, [0, 1], ['10vw', '80vw']);
    const vesicle3Y = useTransform(scale, [0, 1], ['10vh', '85vh']);
    
    const vesicle4X = useTransform(scale, [0, 1], ['60vw', '80vw']);
    const vesicle4Y = useTransform(scale, [0, 1], ['15vh', '80vh']);

    const vesicle5X = useTransform(scale, [0, 1], ['80vw', '90vw']);
    const vesicle5Y = useTransform(scale, [0, 1], ['10vh', '85vh']);

    const vesicle6X = useTransform(scale, [0, 1], ['55vw', '70vw']);
    const vesicle6Y = useTransform(scale, [0, 1], ['75vh', '85vh']);


    return (
        

            
                <HeroContainer ref={ref} id="home">
                
                    
                    <HeroBg>

                        {/* <ImageBgBackground src={noiseBackground}/> */}

                 
         
                      <motion.div style = {{ x: vesicle1X}}>
                        <motion.div style = {{ y: vesicle1Y }}>     
                                <ImageVesicle src={vesicle1} />  
                        </motion.div>
                      </motion.div>

                      <motion.div style = {{ x: vesicle2X}}>
                        <motion.div style = {{ y: vesicle2Y }}>     
                                <ImageVesicle src={vesicle2} />  
                        </motion.div>
                      </motion.div>

                      <motion.div style = {{ x: vesicle3X}}>
                        <motion.div style = {{ y: vesicle3Y }}>     
                                <ImageVesicle src={vesicle3} />  
                        </motion.div>
                      </motion.div>

                      <motion.div style = {{ x: vesicle4X}}>
                        <motion.div style = {{ y: vesicle4Y }}>     
                                <ImageVesicle src={vesicle4} />  
                        </motion.div>
                      </motion.div>

                      <motion.div style = {{ x: vesicle5X}}>
                        <motion.div style = {{ y: vesicle5Y }}>     
                                <ImageVesicle src={vesicle5} />  
                        </motion.div>
                      </motion.div>

                      <motion.div style = {{ x: vesicle6X}}>
                        <motion.div style = {{ y: vesicle6Y }}>     
                                <ImageVesicle src={vesicle6} />  
                        </motion.div>
                      </motion.div>
                        
                      <motion.div style = {{ x: golgiX}}>
                        <motion.div style = {{ y: golgiY }}>     
                                <ImageGolgi src={golgi} />  
                        </motion.div>
                      </motion.div>

                      
                        

                        

                    </HeroBg>

                
                    <HeroContent>
                        
                        <HeroH1>Scientific illustration for publication</HeroH1>
                        <HeroP>Communicate your research with clear, accurate, and visually pleasing graphics.</HeroP>
                    
                        
                        <HeroBtnWrapper>
                            <HeroBtnLink to="services" smooth={true} duration={800} spy={true} exact="true" offset={-60}>Illustrate my research</HeroBtnLink>
                        </HeroBtnWrapper>

                    </HeroContent>
                    
                </HeroContainer>
    )
}

export default HeroSection



// // import React, {useState} from 'react';
// import React from 'react';
// // import {Button} from '../ButtonElements';
// // import { Parallax } from 'react-parallax';
// // import { Parallax, ParallaxLayer } from '@react-spring/parallax';
// import { HeroContainer, HeroContent, HeroP, HeroH1, HeroBtnLink, HeroBtnWrapper, ImageVesicles, HeroBg, ImageGolgi} from './HeroElements';
// // import Video from '../../videos/video.mp4';
// // import astrocyte from '../../images/astrocyte.svg'
// // import cellArt from '../../images/cell art 2 compressed.jpg'
// // import artBackground from '../../images/Hero Background/cell art background.jpg';
// import artVesicles from '../../images/Hero Background/vesicles.png';
// import artGolgi from '../../images/Hero Background/golgi.png';
// import vesicle1 from '../../images/Hero Background'

// // import { Parallax} from 'react-scroll-parallax';
// import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
// import { useRef } from 'react';


// const HeroSection = () => {
    
//     let ref = useRef(null);
//     let {scrollYProgress} = useScroll({
//         target: ref,
//         offset: ["end end", "end start"]
//     });
//     const vesiclesSpring = useSpring(scrollYProgress, {
//         stiffness: 50,
//         damping: 30,
//         restDelta: 0.001
//     });
//     const golgiSpring = useSpring(scrollYProgress, {
//         stiffness: 100,
//         damping: 30,
//         restDelta: 0.001
//     });
//     // const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
//     const vesiclesY = useTransform(vesiclesSpring, [0, 1], ['0%', '60%']);
//     const golgiY = useTransform(golgiSpring, [0, 1], ['0%', '60%']);
//     // const backgroundRotate = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
//     // const vesiclesRotate = useTransform(scrollYProgress, [0, 1], [0, 10]);
//     // const golgiRotate = useTransform(scrollYProgress, [0, 1], [0, 180]);
//     // const vesiclesX = useTransform(scaleX, [0, 1], ['0%', '30%']);

//     return (
        

            
//                 <HeroContainer ref={ref} id="home">
                
                    
//                     <HeroBg>
         
//                         {/* <motion.div style={{ y: backgroundY }} >
//                                 <ImageBgBackground src={artBackground} />   
//                         </motion.div> */}
//                         <motion.div style = {{ y: vesiclesY }}>
//                             {/* <motion.div style={{ x: vesiclesX }} >  */}
//                                     <ImageVesicles src={artVesicles} />  
//                             {/* </motion.div> */}
//                         </motion.div>
                        

//                         <motion.div style={{ x: golgiY }} >
//                                 <ImageGolgi src={artGolgi} />   
//                         </motion.div>

//                     </HeroBg>

                
//                     <HeroContent>
                        
//                         <HeroH1>Scientific illustration for publication</HeroH1>
//                         <HeroP>Communicate your research with clear, accurate, and visually pleasing graphics.</HeroP>
                    
                        
//                         <HeroBtnWrapper>
//                             <HeroBtnLink to="services" smooth={true} duration={800} spy={true} exact="true" offset={-80}>Illustrate my research</HeroBtnLink>
//                         </HeroBtnWrapper>

//                     </HeroContent>
                    
//                 </HeroContainer>
//     )
// }

// export default HeroSection

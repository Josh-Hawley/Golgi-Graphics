// import FramerMagnetic from '../FramerMagnetic';import React, { useEffect } from 'react';
// import Goo from 'gooey-react';
// import { HeroContainer, HeroContent, HeroP, HeroH1, HeroBtnLink, HeroBtnWrapper, HeroBg, ImageGolgi, ImageVesicle } from './HeroElements';
// import vesicle1 from '../../images/Hero Background/vesicle1.png';
// import vesicle2 from '../../images/Hero Background/vesicle2.png';
// import vesicle3 from '../../images/Hero Background/vesicle3.png';
// import vesicle4 from '../../images/Hero Background/vesicle4.png';
// import vesicle5 from '../../images/Hero Background/vesicle5.png';
// import vesicle6 from '../../images/Hero Background/vesicle6.png';
// import golgi from '../../images/Hero Background/golgi corner.png';
// import { motion } from 'framer-motion';

// const HeroSection = () => {
//     return (
//         <HeroContainer id="home">
//             <HeroBg>
//                 <Goo>
//                     {/* Basic positioning to check visibility */}
//                     <motion.div
//                         initial={{ x: '80vw', y: '80vh' }}
//                         animate={{ x: '0vw', y: '30vh' }}
//                         transition={{ duration: 10, repeat: Infinity, repeatType: 'mirror' }}
//                         style={{ position: 'absolute' }}
//                     >
//                         <ImageVesicle src={vesicle1} />
//                     </motion.div>

//                     <motion.div
//                         initial={{ x: '60vw', y: '85vh' }}
//                         animate={{ x: '5vw', y: '25vh' }}
//                         transition={{ duration: 10, repeat: Infinity, repeatType: 'mirror' }}
//                         style={{ position: 'absolute' }}
//                     >
//                         <ImageVesicle src={vesicle2} />
//                     </motion.div>

//                     <motion.div
//                         initial={{ x: '100vw', y: '60vh' }}
//                         animate={{ x: '70vw', y: '30vh' }}
//                         transition={{ duration: 10, repeat: Infinity, repeatType: 'mirror' }}
//                         style={{ position: 'absolute' }}
//                     >
//                         <ImageVesicle src={vesicle3} />
//                     </motion.div>

//                     <motion.div
//                         initial={{ x: '95vw', y: '95vh' }}
//                         animate={{ x: '35vw', y: '35vh' }}
//                         transition={{ duration: 10, repeat: Infinity, repeatType: 'mirror' }}
//                         style={{ position: 'absolute' }}
//                     >
//                         <ImageVesicle src={vesicle4} />
//                     </motion.div>

//                     <motion.div
//                         initial={{ x: '70vw', y: '70vh' }}
//                         animate={{ x: '10vw', y: '10vh' }}
//                         transition={{ duration: 10, repeat: Infinity, repeatType: 'mirror' }}
//                         style={{ position: 'absolute' }}
//                     >
//                         <ImageVesicle src={vesicle5} />
//                     </motion.div>

//                     <motion.div
//                         initial={{ x: '75vw', y: '75vh' }}
//                         animate={{ x: '15vw', y: '15vh' }}
//                         transition={{ duration: 10, repeat: Infinity, repeatType: 'mirror' }}
//                         style={{ position: 'absolute' }}
//                     >
//                         <ImageVesicle src={vesicle6} />
//                     </motion.div>

//                     <motion.div
//                         initial={{ x: '95vw', y: '95vh' }}
//                         animate={{ x: '90vw', y: '90vh' }}
//                         transition={{ duration: 10, repeat: Infinity, repeatType: 'mirror' }}
//                         style={{ position: 'absolute' }}
//                     >
//                         <ImageGolgi src={golgi} />
//                     </motion.div>
//                 </Goo>
//             </HeroBg>

//             <HeroContent>
//                 <HeroH1>Scientific illustration for publication</HeroH1>
//                 <HeroP>Communicate your research with clear, accurate, and visually pleasing graphics.</HeroP>
//                 <HeroBtnWrapper>
//                     <FramerMagnetic scalingX={0.3} scalingY={1}>
//                         <HeroBtnLink to="services" smooth={true} duration={800} spy={true} exact="true" offset={-60}>
//                             Illustrate my research
//                         </HeroBtnLink>
//                     </FramerMagnetic>
//                 </HeroBtnWrapper>
//             </HeroContent>
//         </HeroContainer>
//     );
// }

// export default HeroSection;






import React from 'react';
// import Goo from 'gooey-react';
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

import FramerMagnetic from '../FramerMagnetic';


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


    const golgiX = useTransform(scale, [0, 1], ['0vw', '8vw']);
    const golgiY = useTransform(scale, [0, 1], ['100vh', '110vh']);

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

                    {/* <Goo> */}
         
                      <motion.div style = {{ x: vesicle1X}}>
                        <motion.div style = {{ y: vesicle1Y }}>     
                                <ImageVesicle src={vesicle1} />  
                                
                                  {/* <svg width="192" height="192">
                                    <circle cx="34%" cy="34%" fill="orchid" r="320" />
                                  </svg> */}
                                
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

                      
                        
                      {/* </Goo> */}
                        

                    </HeroBg>

                
                    <HeroContent>
                        
                        <HeroH1>Scientific illustration for publication</HeroH1>
                        <HeroP>Communicate your research with clear, accurate, and visually pleasing graphics.</HeroP>
                        <HeroBtnWrapper>
                        {/* <motion.div
                        whileHover={{ scale: 1.05 }} // Upward movement of 20 pixels on hover
                        whileTap = {{ scale: 0.9}}
                        transition={{ type: 'spring', stiffness: 1000, damping: 100, restDelta: 0.0001 }} // Adjust the transition as needed
                        > */}
                        <FramerMagnetic scalingX={0.3} scalingY={1}>
                        <HeroBtnLink to="services" smooth={true} duration={800} spy={true} exact="true" offset={-60}>Illustrate my research</HeroBtnLink>
                        
                        </FramerMagnetic>
                            
                        {/* </motion.div> */}
                        </HeroBtnWrapper>
                    </HeroContent>
                    
                </HeroContainer>
    )
}

export default HeroSection

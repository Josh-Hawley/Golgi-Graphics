import React from 'react'
// import { Button } from '../ButtonElements';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Button, Layer0, Layer1, Layer2, Layer3, Layer4} from './InfoElements';
// import { ReactComponent as SvgImage } from '../../images/svg1.svg';
// import {useTheme} from 'styled-components';
// import { Parallax } from 'react-parallax';
// import portfolioBackground from '../../images/portfolio background.jpg';
import { useRef, useEffect, useState } from 'react';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';


import layer0 from '../../images/portfolio background/Layer0.png'
import layer1 from '../../images/portfolio background/Layer1.png'
import layer2 from '../../images/portfolio background/Layer2.png'
import layer3 from '../../images/portfolio background/Layer3.png'
import layer4 from '../../images/portfolio background/Layer4.png'



// import top from '../../images/portfolio background/top.png'
// import bottom from '../../images/portfolio background/bottom.png'
// import mid from '../../images/portfolio background/mid.png'
const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, primary, dark, dark2}) => {
  

// let ref = useRef(null);
//     let {scrollYProgress} = useScroll({
//         target: ref,
//         offset: ["start end", "end start"]
//     });
//     let y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);

    const [divHeight, setDivHeight] = useState(0);
    let ref = useRef(null);
    let {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    useEffect(() => {
      if (ref.current) {
        const height = ref.current.offsetHeight;
        setDivHeight(height);
        console.log('Div height:', height);
      }
    }, []);

    const offsetScale = useSpring(scrollYProgress, {
      stiffness: 40,
      damping: 40,
      restDelta: 0.001
  });

    const outerScale = useSpring(scrollYProgress, {
        stiffness: 150,
        damping: 40,
        restDelta: 0.001
    });

    const inner1Scale = useSpring(scrollYProgress, {
      stiffness: 150,
      damping: 40,
      restDelta: 0.001
    });

    const inner2Scale = useSpring(scrollYProgress, {
      stiffness: 150,
      damping: 40,
      restDelta: 0.001
    });

    const offsetX = useTransform(offsetScale, [0,1], ['0', '0'])
    const offsetY = useTransform(offsetScale, [0,1], [40*divHeight/100, 60*divHeight/100])

    const outerX = useTransform(outerScale, [0, 1], ['0', '60px']);
    const outerY = useTransform(outerScale, [0, 1], ['0vh', '-10px']);

    const inner1X = useTransform(inner1Scale, [0, 1], ['0%', '-100px']);
    const inner1Y = useTransform(inner1Scale, [0, 1], ['0vh', '50px']);

    const inner2X = useTransform(inner2Scale, [0, 1], ['0%', '-40px']);
    const inner2Y = useTransform(inner2Scale, [0, 1], ['0vh', '20px']);

    // const inner2X = useTransform(inner2Scale, [0, 1], ['-0px', '0%']);
    // const inner2Y = useTransform(inner2Scale, [0, 1], ['20px', '0vh']);

  return (
    <>
    
      <InfoContainer  lightBg={lightBg} id={id}>
        <InfoWrapper>
            <InfoRow imgStart={imgStart}> 
                <Column1>
                <TextWrapper>
                    <TopLine>{topLine}</TopLine>
                    <Heading lightText={lightText}>{headline}</Heading>
                    <Subtitle darkText={darkText}>{description}</Subtitle>
                    <BtnWrap>
                        <Button to='gallery' smooth={true} duration={500} spy={true} exact="true" offset={-80} primary={primary ? 1 : 0} dark={dark ? 1 : 0} dark2={dark2 ? 1: 0}>{buttonLabel}</Button>
                    </BtnWrap>
                </TextWrapper>
                </Column1>
              
                <Column2 ref={ref}>

                    <motion.div style = {{ x: offsetX, y: offsetY }}>
                      <motion.div style = {{ x: outerX, y: outerY}}>
                                <Layer0 src={layer0} /> 
                      </motion.div>

                      <motion.div style = {{ x: inner1X, y: inner1Y}}>
                                <Layer1 src={layer1} />  
                      </motion.div>

                      <motion.div style = {{ x: outerX, y: outerY }}>  
                                <Layer2 src={layer2} />  
                      </motion.div>

                      <motion.div style = {{ x: inner2X, y: inner2Y }}>    
                                <Layer3 src={layer3} />  
                      </motion.div>

                      <motion.div style = {{ x: outerX, y: outerY}}>   
                                <Layer4 src={layer4} />  
                      </motion.div>
                    </motion.div>
                    

                    

                      

                    
                     
                    {/* </ImgConstrainBox> */}
                        
                    {/* </ImgWrap> */}
                </Column2>
                {/* </Parallax> */}
            </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection;

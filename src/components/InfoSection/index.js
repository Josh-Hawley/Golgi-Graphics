import React from 'react'
// import { Button } from '../ButtonElements';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Button, Img} from './InfoElements';
// import { ReactComponent as SvgImage } from '../../images/svg1.svg';
// import {useTheme} from 'styled-components';
// import { Parallax } from 'react-parallax';
import portfolioBackground from '../../images/portfolio background.jpg';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, primary, dark, dark2}) => {
  

let ref = useRef(null);
    let {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    let y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);

  return (
    <>
    
      <InfoContainer ref={ref} lightBg={lightBg} id={id}>
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
                {/* <Parallax bgImage={portfolioBackground} strength={400}> */}
                <Column2>
                    {/* <ImgWrap> */}

                    {/* <ImgConstrainBox> */}
                    <motion.div style={{ y }}>
                      <Img src={portfolioBackground} alt={'Portfolio image'} />
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

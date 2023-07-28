

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import React from 'react'
import Poster from '../../images/Gallery/poster cropped.jpg';
import Figure from '../../images/Gallery/Neuro and gliogenesis cropped.jpg';
import GraphicalAbstract from '../../images/Gallery/Ellis graphical abstract cropped.jpg'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Button, Img, Inner, Container, IconTitle, DarkOverlay, InnerBottom, InnerTop, ContainerBottom, ContainerTop, ImgWrap, IconTextWrap} from './ServicesElements';
// import {ReactComponent as PosterIcon} from '../../images/Icons/poster icon 3.svg';
// import {ReactComponent as GraphicalAbstractIcon} from '../../images/Icons/graphical abstract icon 3.svg';
// import {ReactComponent as FigureIcon} from '../../images/Icons/figure icon 3.svg';
import FigureIcon from '../../images/Icons/figure icon 3.png';
import GraphicalAbstractIcon from '../../images/Icons/graphical abstract icon 1.png';
import PosterIcon from '../../images/Icons/poster icon 1.png';
const Services = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, primary, dark, dark2}) => {


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
                        <Button to='/contact' primary={primary ? 1 : 0} dark={dark ? 1 : 0} dark2={dark2 ? 1: 0}>{buttonLabel}</Button>
                    </BtnWrap>
                </TextWrapper>
                </Column1>
              
                <Column2 >

                  
  
                  <IconTextWrap>
                  <motion.div
                   whileHover={{ y: -10 }} // Upward movement of 20 pixels on hover
                   transition={{ type: 'spring', stiffness: 1000, damping: 100, restDelta: 0.0001 }} // Adjust the transition as needed
                  >
                    <ImgWrap to='portfolio' smooth={true} duration={800} spy={true} exact="true" offset={-60}>
                      {/* <GraphicalAbstractIcon /> */}
                      <Img src={GraphicalAbstractIcon}/>
                    </ImgWrap>
                    </motion.div>
                    <IconTitle>Graphical abstracts</IconTitle>
                  </IconTextWrap>

                  <IconTextWrap>
                  <motion.div
                   whileHover={{ y: -10 }} // Upward movement of 20 pixels on hover
                   transition={{ type: 'spring', stiffness: 1000, damping: 100, restDelta: 0.0001 }} // Adjust the transition as needed
                  >
                    <ImgWrap to='portfolio' smooth={true} duration={800} spy={true} exact="true" offset={-60}>
                      {/* <FigureIcon /> */}
                      <Img src={FigureIcon}/>
                    </ImgWrap>
                    </motion.div>
                    <IconTitle>Figures</IconTitle>
                  </IconTextWrap>

                  <IconTextWrap>
                  <motion.div
                   whileHover={{ y: -10 }} // Upward movement of 20 pixels on hover
                   transition={{ type: 'spring', stiffness: 1000, damping: 100, restDelta: 0.0001 }} // Adjust the transition as needed
                  >
                    <ImgWrap to='portfolio' smooth={true} duration={800} spy={true} exact="true" offset={-60}>
                      {/* <PosterIcon /> */}
                      <Img src={PosterIcon}/>
                    </ImgWrap>
                    </motion.div>
                    <IconTitle>Posters</IconTitle>
                  </IconTextWrap>

                  
                  
                  

                </Column2>
              
            </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default Services;

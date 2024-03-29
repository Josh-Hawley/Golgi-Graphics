

// import { motion } from 'framer-motion';
import React from 'react'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Button, IconTitle, ImgWrap, IconTextWrap} from './ServicesElements';
import GraphicalAbstractIcon from '../../images/Icons/Icon - Graphical Abstracts.png';
import FigureIcon from '../../images/Icons/Icon - Figures.png';
import PosterIcon from '../../images/Icons/Icon - Posters.png';
import InfographicIcon from '../../images/Icons/Icon - Infographics.png';
import AnimationIcon from '../../images/Icons/Icon - Animation.png';
import DataVisIcon from '../../images/Icons/Icon - Data Vis.png';

import FramerMagnetic from '../FramerMagnetic';

const iconMagScaling = 0.2;


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
                    <Subtitle darkText={darkText}>I provide illustration services to visually represent and communicate scientific research. I specialise in biology, but also illustrate across other scientific disciplines.</Subtitle>
                    <Subtitle darkText={darkText}>My aim is to promote scientific understanding and foster collaboration by transforming complex data into intuitive visual elements, providing accurate and insightful summaries.</Subtitle>

                    <BtnWrap>
                    <FramerMagnetic scalingX={0.3} scalingY={1}>
                        <Button to='/contact' primary={primary ? 1 : 0} dark={dark ? 1 : 0} dark2={dark2 ? 1: 0}>{buttonLabel}</Button>
                    </FramerMagnetic>
                    </BtnWrap>
                </TextWrapper>
                </Column1>
              
                <Column2 >

                
                  <IconTextWrap>
                  {/* <motion.div
                   whileHover={{ scale: 1.1 }} // Upward movement of 20 pixels on hover
                   whileTap = {{ scale: 0.9}}
                   transition={{ type: 'spring', stiffness: 1000, damping: 100, restDelta: 0.0001 }} // Adjust the transition as needed
                  > */}
                  <FramerMagnetic scalingX={iconMagScaling} scalingY={iconMagScaling}>
                  <ImgWrap to='portfolio' smooth={true} duration={800} spy={true} exact="true" offset={-60}>       
                    <img src={GraphicalAbstractIcon} alt="Graphical abstract icon" style={{ maxWidth: '100%', height: 'auto' }} />
                  </ImgWrap>
                  </FramerMagnetic>
                    {/* </motion.div> */}
                    <IconTitle>Graphical abstracts</IconTitle>
                  </IconTextWrap>



                  <IconTextWrap>
                  <FramerMagnetic scalingX={iconMagScaling} scalingY={iconMagScaling}>
                    <ImgWrap to='portfolio' smooth={true} duration={800} spy={true} exact="true" offset={-60}>
                      <img src={FigureIcon} alt="Figure icon" style={{ maxWidth: '100%', height: 'auto' }} />
                    </ImgWrap>
                    </FramerMagnetic>
         
                    <IconTitle>Figures</IconTitle>
                  </IconTextWrap>

                  <IconTextWrap>
                  <FramerMagnetic scalingX={iconMagScaling} scalingY={iconMagScaling}>
                    <ImgWrap to='portfolio' smooth={true} duration={800} spy={true} exact="true" offset={-60}>
                    <img src={AnimationIcon} alt="Animation icon" style={{ maxWidth: '100%', height: 'auto' }} />           
                    </ImgWrap>
                  </FramerMagnetic>
                  <IconTitle>Animation</IconTitle>
                  </IconTextWrap>

                  <IconTextWrap>
                  <FramerMagnetic scalingX={iconMagScaling} scalingY={iconMagScaling}>
                    <ImgWrap to='portfolio' smooth={true} duration={800} spy={true} exact="true" offset={-60}>
                      
                    <img src={PosterIcon} alt="Poster icon" style={{ maxWidth: '100%', height: 'auto' }} />
                      
                    </ImgWrap>
                    </FramerMagnetic>
                    <IconTitle>Posters</IconTitle>
                  </IconTextWrap>

                  <IconTextWrap>
                  <FramerMagnetic scalingX={iconMagScaling} scalingY={iconMagScaling}>
                    <ImgWrap to='portfolio' smooth={true} duration={800} spy={true} exact="true" offset={-60}>
                      
                      <img src={InfographicIcon} alt="Infographic icon" style={{ maxWidth: '100%', height: 'auto' }} />
                     
                 
                    </ImgWrap>
                    </FramerMagnetic>
                    <IconTitle>Infographics</IconTitle>
                  </IconTextWrap>

                  <IconTextWrap>
                  <FramerMagnetic scalingX={iconMagScaling} scalingY={iconMagScaling}>
                    <ImgWrap to='portfolio' smooth={true} duration={800} spy={true} exact="true" offset={-60}>
                      
                    <img src={DataVisIcon} alt="Data visualisation icon" style={{ maxWidth: '100%', height: 'auto' }} />
                     
                 
                    </ImgWrap>
                    </FramerMagnetic>
                    <IconTitle>Data visualisation</IconTitle>
                  </IconTextWrap>

                  

                  
                  
                  

                </Column2>
              
            </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default Services;

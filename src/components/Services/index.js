// import React from 'react';
// import Icon1 from '../../images/graphical abstract icon 2.jpg';
// import Icon2 from '../../images/svg2.svg';
// import Icon3 from '../../images/card poster icon.jpg';

// import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements';

// const Services = () => {
//   return (
//     <ServicesContainer id="services">
//       <ServicesH1>Our Services</ServicesH1>
      
//       <ServicesWrapper>
//         <ServicesCard to='portfolio' smooth={true} duration={800} spy={true} exact="true" offset={-80}>
//           <ServicesIcon src={Icon1} />
//             <ServicesH2>Graphical abstracts</ServicesH2>
//             <ServicesP>Text here</ServicesP>
//         </ServicesCard>
        
//         <ServicesCard to='portfolio' smooth={true} duration={800} spy={true} exact="true" offset={-80}>
//           <ServicesIcon src={Icon2} />
//             <ServicesH2>Figures</ServicesH2>
//             <ServicesP>Complex data presented effectively and clearly.</ServicesP>
//         </ServicesCard>

//         <ServicesCard to='portfolio' smooth={true} duration={800} spy={true} exact="true" offset={-80}>
//           <ServicesIcon src={Icon3} />
//             <ServicesH2>Posters</ServicesH2>
//             <ServicesP>Conferences, infographics, public engagement.</ServicesP>
//         </ServicesCard>

//       </ServicesWrapper>
//     </ServicesContainer>
//   )
// }

// export default Services;


import React from 'react'
// import { Button } from '../ButtonElements';
// import Icon1 from '../../images/graphical abstract icon 2.jpg';
// import Icon2 from '../../images/svg2.svg';
// import Icon3 from '../../images/card poster icon.jpg';
import Poster from '../../images/Gallery/poster cropped.jpg';
import Figure from '../../images/Gallery/Neuro and gliogenesis cropped.jpg';
import GraphicalAbstract from '../../images/Gallery/Ellis graphical abstract cropped.jpg'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Button, Img, Inner, Container, IconTitle, DarkOverlay, InnerBottom, InnerTop, ContainerBottom, ContainerTop} from './ServicesElements';
// import { ReactComponent as SvgImage } from '../../images/svg1.svg';
// import {useTheme} from 'styled-components';
// import { Parallax } from 'react-parallax';
// import portfolioBackground from '../../images/portfolio background.jpg';
// import { useRef, useEffect, useState } from 'react';

// import { motion, useScroll, useSpring, useTransform } from 'framer-motion';






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
                        <Button to='/contact' smooth={true} duration={500} spy={true} exact="true" offset={-80} primary={primary ? 1 : 0} dark={dark ? 1 : 0} dark2={dark2 ? 1: 0}>{buttonLabel}</Button>
                    </BtnWrap>
                </TextWrapper>
                </Column1>
              
                <Column2 >
                  {/* <ImgWrap>
                    <Img src={Icon1}/>
                  </ImgWrap>
                  <ImgWrap>
                    <Img src={Icon2}/>
                  </ImgWrap>
                  <ImgWrap>
                    <Img src={Icon3}/>
                  </ImgWrap> */}

                  {/* <TrapezoidContainer>
                    <Trapezoid>
                      <Img src = {Icon1}/>
                    </Trapezoid>

                  </TrapezoidContainer> */}


                  <ContainerTop to='portfolio' smooth={true} duration={800} spy={true} exact="true" offset={-60}>
                    <InnerTop>
                    <IconTitle>Graphical abstracts</IconTitle>
                    <Img src={GraphicalAbstract} />
                    <DarkOverlay />
                    </InnerTop>
                  </ContainerTop>

                  <Container to='portfolio' smooth={true} duration={800} spy={true} exact="true" offset={-60}>
                    <Inner>
                    <IconTitle>Figures</IconTitle>
                    <Img src={Figure} />
                    <DarkOverlay />
                    </Inner>
                  </Container>

                  <ContainerBottom to='portfolio' smooth={true} duration={800} spy={true} exact="true" offset={-60}>
                    <InnerBottom>
                    <IconTitle>Posters</IconTitle>
                      {/* <Heading>Hey</Heading>
                      <Subtitle style={{color: 'black'}}>This is an informative card that will tell you something important.</Subtitle> */}
                      <Img src={Poster} />
                      <DarkOverlay />
                    </InnerBottom>
                  </ContainerBottom>

                  

                  

                </Column2>
              
            </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default Services;

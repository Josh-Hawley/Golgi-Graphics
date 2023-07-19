import React from 'react'
// import { Button } from '../ButtonElements';
import { AboutContainer, AboutWrapper, AboutRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, ImgWrap, Img} from './AboutElements';
import img from '../../images/website profile pic colour.png';
// import { ReactComponent as SvgImage } from '../../images/svg1.svg';
// import {useTheme} from 'styled-components';

const About = () => {
  
// const theme = useTheme();

  return (
    <>
      <AboutContainer lightBg={true} id='about'>
        <AboutWrapper>
            <AboutRow imgStart={false}> 
                <Column1>
                <TextWrapper>
                    <TopLine>Dr. Josh Hawley</TopLine>
                    <Heading lightText={true}>About</Heading>
                    <Subtitle darkText={true}>
                        Welcome! I'm Dr. Josh Hawley, a passionate advocate for the fusion of science and design. With a background in Quantitative and Biophysical Biology, I have honed my expertise in understanding the intricacies of embryonic development and stem cell fate decisions through a combination of mathematically modelling and experimental work.
                    </Subtitle>

                    <Subtitle>
                    However, my curiosity extends beyond just doing the science and as a graphic designer, I channel my creativity and love for aesthetics to convey the complexity of scienctific concepts with visually appealing and easy-to-understand graphics. I believe that bridging the gap between science and art is crucial for fostering scientific literacy, engaging a broader audience, and in communicating amongst scientific peers.
                    </Subtitle>
                    
  
                    
                    {/* <BtnWrap>
                        <Button to='gallery' smooth={true} duration={500} spy={true} exact="true" offset={-80} primary={primary ? 1 : 0} dark={dark ? 1 : 0} dark2={dark2 ? 1: 0}>{buttonLabel}</Button>
                    </BtnWrap> */}
                </TextWrapper>
                </Column1>
                <Column2>
                    <ImgWrap>
                        <Img src={img} alt='Profile picture'/>
                    </ImgWrap>
                </Column2>
            </AboutRow>
        </AboutWrapper>
      </AboutContainer>
    </>
  )
}

export default About;

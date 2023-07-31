import React from 'react'
// import { Button } from '../ButtonElements';
import { AboutContainer, AboutWrapper, AboutRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, ImgWrap, Img} from './AboutElements';
import img from '../../images/website profile pic.png'
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
                        Welcome. I'm Dr. Josh Hawley, a passionate advocate for the fusion of science and design.
                    </Subtitle>
                    <Subtitle darkText={true}>
                         My PhD involved understanding how stem cells communicate with each other during spinal cord development, and this required a combination of experimental work and mathematical modelling. Therefore I have a good grasp of a wide range of areas in biology, physics, and maths.
                    </Subtitle>

                    <Subtitle>
                      The reason why Golgi Graphics exists is because I have a passion for communicating complex ideas in intuitive and effective ways. I also love aesthetics and illustration, so I have naturally gravitated towards the use of graphic design in commuicating ideas throughout my scientific career, which has evolved into a scientific illustration career. 
                     
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

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
                        Welcome. I'm Josh, a passionate advocate for the fusion of science and design.
                    </Subtitle>
                    <Subtitle darkText={true}>
                         My PhD involved understanding how stem cells communicate with each other during spinal cord development; this required a combination of experimental work and mathematical modelling. Therefore I have a good grasp of a wide range of areas in biology, physics, and maths.
                    </Subtitle>

                    <Subtitle>

                      I also love illustration and animation and so I have naturally gravitated to a career in scientific illustration as it is the perfect combination of technical understanding and creativity that I thrive on.
                      
                    </Subtitle>
                    
                   
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

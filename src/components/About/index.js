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
                    {/* <Subtitle darkText={true}>
                        Welcome. I'm Josh, a passionate advocate for the fusion of science and design.
                    </Subtitle>
                    <Subtitle darkText={true}>
                         My PhD involved understanding how stem cells communicate with each other during spinal cord development; this required a combination of experimental work and mathematical modelling. Therefore I have a good grasp of a wide range of areas in biology, physics, and maths.
                    </Subtitle>

                    <Subtitle>

                      I also love illustration and animation and so I have naturally gravitated to a career in scientific illustration as it is the perfect combination of technical understanding and creativity that I thrive on.
                      
                    </Subtitle> */}

                    <Subtitle>
Welcome to my website! I’m Josh and I started Golgi Graphics so that I could combine two things I love doing – science and art.
                    </Subtitle>

                    <Subtitle>
During my PhD in Computational Developmental Biology, I picked up a few skills in illustrating figures, presentations and posters, and had even dabbled in a bit of 3D animation. This was all as a means to communicate the often complex ideas I was encountering in my research, and I found visual communication to be the most effective method for this – often resulting in better engagement with my research. 
                    </Subtitle>

                    <Subtitle>
                      Ultimately after finishing my PhD and starting a Postdoc I decided that doing scientific graphic design as a career would be a pretty unique and exciting avenue to explore, so here I am a couple of years later doing work that I am passionate about.
                    </Subtitle>

                    <Subtitle>
                      What I enjoy most about my work is collaborating with brilliant, friendly researchers and getting to immerse myself in fascinating science I might never have encountered otherwise. In turn it is just as rewarding to see the reactions to the designs I put my very best into.
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

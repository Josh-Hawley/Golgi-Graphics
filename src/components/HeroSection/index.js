import React, {useState} from 'react';
import {Button} from '../ButtonElements';
import { Parallax } from 'react-parallax';
import { HeroContainer, HeroContent, HeroP, HeroH1, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements';
// import Video from '../../videos/video.mp4';
// import astrocyte from '../../images/astrocyte.svg'
import cellArt from '../../images/cell art 2.png'

const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    };

    return (
        <Parallax bgImage={cellArt} strength={200}>
        <HeroContainer id="home">
        
            {/* <HeroBg> */}
                {/* <VideoBg autoPlay loop muted src={Video} type='video/mp4' /> */}
                
                {/* <ImageContainer> */}
                  {/* <ImageBg src={cellArt}/>   */}
                {/* </ImageContainer> */}
                
                {/* <img src={cellArt} alt="Background" /> */}

            {/* </HeroBg> */}

           
                <HeroContent>
                    
                    <HeroH1>Scientific illustration for publication</HeroH1>
                    <HeroP>Communicate your research with clear, accurate, and visually pleasing illustration.</HeroP>
                
                    {/* <HeroBtnWrapper>
                        <Button to="/gallery" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                            Illustrate my research! {hover ?  <ArrowRight /> : <ArrowForward />}
                        </Button>
                    </HeroBtnWrapper> */}
                    {/* <NavBtn>
                        <NavBtnLink to="/contact">Contact</NavBtnLink>
                    </NavBtn> */}

                </HeroContent>
            
                

            

        </HeroContainer>
        </Parallax>
    )
}

export default HeroSection

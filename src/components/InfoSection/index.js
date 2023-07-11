import React from 'react'
// import { Button } from '../ButtonElements';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Button} from './InfoElements';
// import { ReactComponent as SvgImage } from '../../images/svg1.svg';
// import {useTheme} from 'styled-components';
import { Parallax } from 'react-parallax';
import portfolioBackground from '../../images/portfolio background.jpg'

const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, primary, dark, dark2}) => {
  
// const theme = useTheme();

  return (
    <>
    
      <InfoContainer lightBg={lightBg} id={id}>
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
                <Parallax bgImage={portfolioBackground} strength={300}>
                <Column2>
                    <ImgWrap>
                    {/* <ImgConstrainBox> */}
                      {/* <Img src={img} alt={alt} /> */}
                    {/* </ImgConstrainBox> */}
                        
                    </ImgWrap>
                </Column2>
                </Parallax>
            </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection;

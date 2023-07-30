import React from 'react'
import { PortfolioPgContainer, PortfolioPgContent, PortfolioPgH1, ImageGalleryContainer, ImageGalleryWrap } from './PortfolioPgElements';
import ImageGallery from 'react-image-grid-gallery';


import img1 from '../../images/Gallery/Hes_interactions.jpg';
import img2 from '../../images/Gallery/img3.png';
import img3 from '../../images/Gallery/Neurulation.jpg';
import img4 from '../../images/Gallery/Neuro and gliogenesis.jpg';
import img5 from '../../images/Gallery/flash talk.jpg';
import img6 from '../../images/Gallery/Ellis graphical abstract.jpg';


const images = [
  {
    src: img2,
    width: 3995,
    height: 1351,
    caption: 'Figure'
  },
  {
    src: img1,
    width: 3500,
    height: 4577,
    caption: 'Figure'
  },
  
  {
    src: img3,
    width: 1500,
    height: 1495,
    caption: 'Figure'
  },
  {
    src: img4,
    width: 1214,
    height: 1622,
    caption: 'Figure'
  },
  {
    src: img5,
    width: 1296,
    height: 1336,
    caption: 'Flash talk'
  },
  {
    src: img6,
    caption: 'Graphical abstract'
  },

];

const PortfolioPg = () => {
  return (
    <>
    
      <PortfolioPgContainer>
        
        <PortfolioPgContent>
          <PortfolioPgH1>Portfolio</PortfolioPgH1>
        </PortfolioPgContent>
        

      </PortfolioPgContainer>
      <ImageGalleryWrap>
      <ImageGalleryContainer>
        
          <ImageGallery imgArray={images} columnWidth={400} gapSize={50} />
        
      </ImageGalleryContainer>
      </ImageGalleryWrap>
    </>
  )
}

export default PortfolioPg;

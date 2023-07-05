import React from 'react'
import { PortfolioPgContainer, PortfolioPgContent, PortfolioPgH1, ImageGalleryContainer } from './PortfolioPgElements';
import ImageGallery from 'react-image-grid-gallery';


import img1 from '../../images/Gallery/img1.png';
import img2 from '../../images/Gallery/img2.png';
import img3 from '../../images/Gallery/img3.png';
import img4 from '../../images/Gallery/img4.png';
import img5 from '../../images/Gallery/img5.png';
import img6 from '../../images/Gallery/img6.png';

const images = [
  {
    src: img1,
    width: 3500,
    height: 4577,
    caption: 'Graphical abstract'
  },
  {
    src: img2,
    width: 3995,
    height: 1351,
    caption: 'Text description'
  },
  {
    src: img3,
    width: 1500,
    height: 1495,
    caption: 'Text description'
  },
  {
    src: img4,
    width: 1214,
    height: 1622,
    caption: 'Text description'
  },
  {
    src: img5,
    width: 1296,
    height: 1336,
    caption: 'Text description'
  },
  {
    src: img6,
    width: 3000,
    height: 1623,
    caption: 'Text description'
  }
];

const PortfolioPg = () => {
  return (
    <>
    
      <PortfolioPgContainer>
        <PortfolioPgContent>
          <PortfolioPgH1>Portfolio</PortfolioPgH1>
        </PortfolioPgContent>
        

      </PortfolioPgContainer>

      <ImageGalleryContainer>
        <ImageGallery imgArray={images} columnWidth={250} gapSize={60} />
      </ImageGalleryContainer>
    </>
  )
}

export default PortfolioPg;

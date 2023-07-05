import React from 'react';
// import Icon1 from '../../images/svg1.svg';
// import Icon2 from '../../images/svg2.svg';
// import Icon3 from '../../images/svg3.svg';
// import ImageGallery from 'react-image-gallery';
// import images from './Images';
// import PortfolioPage from '../../pages/gallery';

import { PortfolioContainer, PortfolioH1 } from './PortfolioElements';

// const images = [
//   {
//     original: 'https://picsum.photos/id/1018/1000/600/',
//     thumbnail: 'https://picsum.photos/id/1018/250/150/',
//   },
//   {
//     original: 'https://picsum.photos/id/1015/1000/600/',
//     thumbnail: 'https://picsum.photos/id/1015/250/150/',
//   },
//   {
//     original: 'https://picsum.photos/id/1019/1000/600/',
//     thumbnail: 'https://picsum.photos/id/1019/250/150/',
//   },
// ];

const Portfolio = () => {
  return (
    <PortfolioContainer id="portfolio">
      <PortfolioH1>Portfolio</PortfolioH1>
      {/* <PortfolioPage /> */}

      {/* <PortfolioWrapper> */}
      
        {/* <PortfolioCard>

            

            <PortfolioH2>Graphical abstracts</PortfolioH2>
            <PortfolioP>We help reduce your fees and increase your overall revenue</PortfolioP>
        
        </PortfolioCard> */}
        
        {/* <PortfolioCard>
          <PortfolioIcon src={Icon2} />
            <PortfolioH2>Figures</PortfolioH2>
            <PortfolioP>We help reduce your fees and increase your overall revenue</PortfolioP>
        </PortfolioCard> */}

        {/* <PortfolioCard>
          <PortfolioIcon src={Icon3} />
            <PortfolioH2>Animation</PortfolioH2>
            <PortfolioP>We help reduce your fees and increase your overall revenue</PortfolioP>
        </PortfolioCard> */}

      {/* </PortfolioWrapper> */}
    </PortfolioContainer>
  )
}

export default Portfolio;


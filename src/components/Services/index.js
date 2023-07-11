import React from 'react';
import Icon1 from '../../images/graphical abstract icon 2.jpg';
import Icon2 from '../../images/svg2.svg';
import Icon3 from '../../images/card poster icon.jpg';

import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      
      <ServicesWrapper>
        <ServicesCard to='portfolio' smooth={true} duration={800} spy={true} exact="true" offset={-80}>
          <ServicesIcon src={Icon1} />
            <ServicesH2>Graphical abstracts</ServicesH2>
            <ServicesP>Text here</ServicesP>
        </ServicesCard>
        
        <ServicesCard to='portfolio' smooth={true} duration={800} spy={true} exact="true" offset={-80}>
          <ServicesIcon src={Icon2} />
            <ServicesH2>Figures</ServicesH2>
            <ServicesP>Complex data presented effectively and clearly.</ServicesP>
        </ServicesCard>

        <ServicesCard to='portfolio' smooth={true} duration={800} spy={true} exact="true" offset={-80}>
          <ServicesIcon src={Icon3} />
            <ServicesH2>Posters</ServicesH2>
            <ServicesP>Conferences, infographics, public engagement.</ServicesP>
        </ServicesCard>

      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services;

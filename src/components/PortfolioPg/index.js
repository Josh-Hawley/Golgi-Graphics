import React from 'react'
import { PageContainer, TagsContainer, TagsWrap, GalleryWrap, Header } from './PortfolioPgElements';
// import ImageGallery from 'react-image-grid-gallery';
import {images} from './data';
import { motion } from 'framer-motion';

const Card = ({
  setSelected,
  image
}) => {
  return <div style={{ display:'inline-block', marginBottom: '20px'}}>
    <motion.img src={image.src}
    layoutId={`card-${image.id}`}
    // layout = 'positionAndSize'
    whileHover={{
      scale: 1.025,
      transition: {
        duration: 0.2
      }
    }}

    whileTap={{
      scale: 0.95
    }}

    

    onClick={() => {
      setSelected(image);
    }}

    
    style={{
      width: '100%',
      boxShadow: '0px 0px 30px rgba(0,0,0,0.2)',
      // margin: '5px 10px',
      cursor: 'pointer'
    }}/>

    <TagsWrap>
      {image.tags.map((tag) => {
        return (
          <TagsContainer key={tag} >{tag}</TagsContainer>
        )
      })}
    </TagsWrap>
  </div>
};

const PortfolioPg = ({setSelected}) => {
  return (
    <>
    
      {/* <PortfolioPgContainer>
        
        <PortfolioPgContent>
          <PortfolioPgH1>Portfolio</PortfolioPgH1>
        </PortfolioPgContent>
        

      </PortfolioPgContainer> */}


      <PageContainer>
        <Header>Portfolio</Header>
        <GalleryWrap>
          {images.map(image => <Card key={image.id} setSelected={setSelected} image={image}/>)}
        </GalleryWrap>
      </PageContainer>
      
                
    </>
  )
}

export default PortfolioPg;












// import img1 from '../../images/Gallery/Hes_interactions.jpg';
// import img2 from '../../images/Gallery/img3.png';
// import img3 from '../../images/Gallery/Neurulation.jpg';
// import img4 from '../../images/Gallery/Neuro and gliogenesis.jpg';
// import img5 from '../../images/Gallery/flash talk.jpg';
// import img6 from '../../images/Gallery/Ellis graphical abstract.jpg';


// const images = [
//   {
//     src: img2,
//     width: 3995,
//     height: 1351,
//     caption: 'Figure'
//   },
//   {
//     src: img1,
//     width: 3500,
//     height: 4577,
//     caption: 'Figure'
//   },
  
//   {
//     src: img3,
//     width: 1500,
//     height: 1495,
//     caption: 'Figure'
//   },
//   {
//     src: img4,
//     width: 1214,
//     height: 1622,
//     caption: 'Figure'
//   },
//   {
//     src: img5,
//     width: 1296,
//     height: 1336,
//     caption: 'Flash talk'
//   },
//   {
//     src: img6,
//     caption: 'Graphical abstract'
//   },

// ];
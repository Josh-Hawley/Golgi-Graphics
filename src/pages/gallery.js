import React, {useState} from 'react'
import PortfolioPg from '../components/PortfolioPg'
import Sidebar from '../components/Sidebar';
// import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { PageContainer } from './PageElements';
import NavbarNoLinks from '../components/NavbarNoLinks';

const GalleryPage = () => {
  const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };
  return (
        // <ImageGallery imgArray={images} columnWidth={400} gapSize={24} />
      <>
      <PageContainer isOpen={isOpen}>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <NavbarNoLinks toggle={toggle}/>
      <PortfolioPg />
      <Footer />

      </PageContainer>
      
      </>
    
    )

}

export default GalleryPage;
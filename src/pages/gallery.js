import React, {useState} from 'react'
import PortfolioPg from '../components/PortfolioPg'
import Footer from '../components/Footer';
import { PageContainer } from './PageElements';
import NavbarNoScrollLinks from '../components/NavbarNoScrollLinks';
import SidebarNoScrollLinks from '../components/SidebarNoScrollLinks';
import Modal from '../components/Modal';

const GalleryPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [selected, setSelected] = useState(null);

    const toggle = () => {
        setIsOpen(!isOpen)
    };
  return (
        
      <>
      <PageContainer isOpen={isOpen}>
      <Modal />
      <SidebarNoScrollLinks isOpen={isOpen} toggle={toggle}/>
      <NavbarNoScrollLinks toggle={toggle}/>
      <PortfolioPg />
      <Footer />

      </PageContainer>
      
      </>
    
    )

}

export default GalleryPage;
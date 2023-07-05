import React, {useState} from 'react'
import PortfolioPg from '../components/PortfolioPg'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const GalleryPage = () => {
  const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };
  return (
        // <ImageGallery imgArray={images} columnWidth={400} gapSize={24} />
      <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <PortfolioPg />
      </>
    
    )

}

export default GalleryPage;
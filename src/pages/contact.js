import React, {useState} from 'react'
import Contact from '../components/Contact';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const ContactPage = () => {

  const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };

  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle}/>
    <Contact />
    </>
    
  )
}

export default ContactPage;

// import React from 'react';
// import ResponsiveGallery from 'react-responsive-gallery';
// import { Gallery } from "react-grid-gallery";
// import ImageGallery from "react-image-grid-gallery";

// import img1 from '../images/Gallery/img1.png';
// import img2 from '../images/Gallery/img2.png';
// import img3 from '../images/Gallery/img3.png';
// import img4 from '../images/Gallery/img4.png';
// import img5 from '../images/Gallery/img5.png';
// import img6 from '../images/Gallery/img6.png';

// const images = [
//   {
//     src: img1,
//     width: 3500,
//     height: 4577,
//     caption: 'Graphical abstract <a>link</a>'
//   },
//   {
//     src: img2,
//     width: 3995,
//     height: 1351
//   },
//   {
//     src: img3,
//     width: 1500,
//     height: 1495
//   },
//   {
//     src: img4,
//     width: 1214,
//     height: 1622
//   },
//   {
//     src: img5,
//     width: 1296,
//     height: 1336
//   },
//   {
//     src: img6,
//     width: 3000,
//     height: 1623
//   }
// ];

// const GalleryPage = () => {

//   const numOfImagesPerRow = {
//     xs: 1,
//     s: 1,
//     m: 2,
//     l: 2,
//     xl: 2, 
//     xxl:3
//   };

//   const colsPadding = {
//     xs: 10, // Extra small devices (phones)
//     s: 10, // Small devices (tablets)
//     m: 15, // Medium devices (desktops)
//     l: 15, // Large devices (large desktops)
//     xl: 15, // Extra large devices
//     xxl: 15, // Extra extra large devices
//   };
//   const imagesPaddingBottom = {
//     xs: 40, // Extra small devices (phones)
//     s: 40, // Small devices (tablets)
//     m: 45, // Medium devices (desktops)
//     l: 45, // Large devices (large desktops)
//     xl: 45, // Extra large devices
//     xxl: 45, // Extra extra large devices
//   };

//   return (
//     // <ResponsiveGallery imagesPaddingBottom={imagesPaddingBottom} numOfImagesPerRow={numOfImagesPerRow} colsPadding={colsPadding} images={images} />
//     // <Gallery images={images}/>
//     <ImageGallery imgArray={images} columnWidth={230} gapSize={24} />
//   )
// };

// export default GalleryPage;





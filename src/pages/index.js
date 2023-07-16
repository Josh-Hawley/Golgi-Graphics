// import React, {useState} from 'react'
// import Sidebar from '../components/Sidebar';
// import Navbar from '../components/Navbar';
// import HeroSection from '../components/HeroSection';
// import InfoSection from '../components/InfoSection';
// import { homeObjTwo } from '../components/InfoSection/Data';
// import Services from '../components/Services';
// import Footer from '../components/Footer';
// // import Portfolio from '../components/Portfolio';
// import { PageContainer } from './PageElements';
// import About from '../components/About';
// import { Parallax, ParallaxLayer } from '@react-spring/parallax';

// const Home = () => {

//     const [isOpen, setIsOpen] = useState(false);

//     const toggle = () => {
//         setIsOpen(!isOpen)
//     };

//     return (
//         <>
        
//         <PageContainer isOpen={isOpen}>
//             <Sidebar isOpen={isOpen} toggle={toggle}/>
//             <Navbar toggle={toggle} isOpen={isOpen}/>  

//             <Parallax pages={5}>
//                 <ParallaxLayer speed={1}>
//                     <HeroSection />
                    
//                 </ParallaxLayer>

//                 <ParallaxLayer offset={1} speed={1}>
//                     <Services />
//                 </ParallaxLayer>
                
            
            
//             <ParallaxLayer offset={2} speed={1}>
//                 <InfoSection {...homeObjTwo}/>
                
                
//             </ParallaxLayer>
//             <ParallaxLayer offset={3} speed={1}>
//                 <About />
//             </ParallaxLayer>
            
//             <ParallaxLayer offset={4} speed={1}>
//                 <Footer /> 
//             </ParallaxLayer>
           
            
//             </Parallax>
//         </PageContainer>
        
//         </>
//     );
// }

// export default Home;



import React, {useState} from 'react'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjTwo } from '../components/InfoSection/Data';
import Services from '../components/Services';
import Footer from '../components/Footer';
// import Portfolio from '../components/Portfolio';
import { PageContainer } from './PageElements';
import About from '../components/About';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
        
        <PageContainer isOpen={isOpen}>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            
            <Navbar toggle={toggle} isOpen={isOpen}/>     
            <HeroSection />
            {/* <InfoSection {...homeObjOne}/> */}
            <Services />
            {/* <Portfolio /> */}
            <InfoSection {...homeObjTwo}/>
            {/* <InfoSection {...homeObjThree}/> */}
            <About />
            <Footer />
        </PageContainer>
        
        </>
    );
}

export default Home;

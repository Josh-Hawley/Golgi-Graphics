import React, {useState} from 'react'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjTwo } from '../components/InfoSection/Data';
import { servicesData } from '../components/Services/Data';
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
            {/* <HorzLine/> */}
            <Services {...servicesData}/>
            {/* <HorzLine/> */}
            <InfoSection {...homeObjTwo}/>
            {/* <HorzLine/> */}
            <About />
            <Footer />
        </PageContainer>
        
        </>
    );
}

export default Home;

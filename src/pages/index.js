import React, {useState} from 'react'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjTwo, homeObjThree } from '../components/InfoSection/Data';
import Services from '../components/Services';
import Footer from '../components/Footer';
import Portfolio from '../components/Portfolio';
import { PageContainer } from './PageElements';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
        <PageContainer isOpen={isOpen}>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>     
            <HeroSection />
            {/* <InfoSection {...homeObjOne}/> */}
            <Services />
            <Portfolio />
            <InfoSection {...homeObjTwo}/>
            <InfoSection {...homeObjThree}/>
            <Footer />
        </PageContainer>
        
        </>
    );
}

export default Home;

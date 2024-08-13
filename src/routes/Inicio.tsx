import { useEffect } from 'react';

import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Section1 from '../Components/Inicio/section1';
import Section2 from '../Components/Inicio/section2';
import Section3 from '../Components/Inicio/section3';
import Section4 from '../Components/Inicio/section4';
import Section5 from '../Components/Inicio/section5';
import Section6 from '../Components/Inicio/section6';
import Section7 from '../Components/Inicio/section7';

export default function Route(){

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
    <>
        <Header/>
        <Section1/>
        <Section4/>
        <Section2/>
        <Section3/>
        <Section5/>
        <Section7/>
        <Section6/>
        <Footer/>
    </>
    )
}
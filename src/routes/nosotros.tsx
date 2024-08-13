import { useEffect } from 'react';

import Header from '../Components/Header';
import Footer from '../Components/Footer';

import Section1 from '../Components/nosotros/section1';
import Section2 from '../Components/nosotros/section2';
import Section3 from '../Components/nosotros/section3';
import Section4 from '../Components/nosotros/section4';
import Section5 from '../Components/nosotros/section5';
import Section6 from '../Components/nosotros/section6';
export default function Route(){

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
    <>
        <Header/>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Footer/>
    </>
    )
}
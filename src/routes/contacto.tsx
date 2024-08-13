import { useEffect } from 'react';

import Header from '../Components/Header';
import Footer from '../Components/Footer';

import Section1 from '../Components/contactanos/section1';
import Section2 from '../Components/contactanos/section2';
import Section3 from '../Components/contactanos/section3';

export default function Route(){

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
    <>
        <Header/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Footer/>
    </>
    )
}
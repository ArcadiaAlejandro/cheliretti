import { useEffect } from 'react';

import Header from '../Components/Header';
import Footer from '../Components/Footer';

import Section1 from '../Components/proyectos/section1';
import Section2 from '../Components/proyectos/section2';
export default function Route(){


    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
    <>
        <Header/>
        <Section1/>
        <Section2/>
        <Footer/>
    </>
    )
}
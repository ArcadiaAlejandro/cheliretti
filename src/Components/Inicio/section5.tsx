import React from 'react';
import Modulo5 from '../module/modulo_section5';

import '../../index.css'; 


const sections = [
    { id: 1, imagen:'https://plus.unsplash.com/premium_photo-1675643315756-61f92690eead?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Proyecto', description: 'INSTALACIÓN DE ANTENA SATELITAL', location: 'Junín, Huancayo, Huancayo,' },
    { id: 2, imagen:'https://images.unsplash.com/photo-1704899507903-02adf8500287?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWxlY3RyaWNvJTIwdG9ycmVzfGVufDB8fDB8fHww', title: 'Proyecto', description: 'INSTALACIÓN DE ANTENA SATELITAL', location: 'Junín, Huancayo, Huancayo' },
    { id: 3, imagen:'https://plus.unsplash.com/premium_photo-1664695368959-a40b6a4993e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWxlY3RyaWNvJTIwdG9ycmVzfGVufDB8fDB8fHww', title: 'Proyecto', description: 'INSTALACIÓN DE ANTENA SATELITAL', location: 'Junín, Huancayo, Huancayo' },
    { id: 4, imagen:'https://images.unsplash.com/photo-1689875153856-2187dac3805f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGVsZWN0cmljbyUyMHRvcnJlc3xlbnwwfHwwfHx8MA%3D%3D', title: 'Proyecto', description: 'INSTALACIÓN DE ANTENA SATELITAL', location: 'Junín, Huancayo, Huancayo' },
    { id: 5, imagen:'https://images.unsplash.com/photo-1636218685495-8f6545aadb71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGVsZWN0cmljbyUyMHRvcnJlc3xlbnwwfHwwfHx8MA%3D%3D', title: 'Proyecto', description: 'INSTALACIÓN DE ANTENA SATELITAL', location: 'Junín, Huancayo, Huancayo' },
    { id: 6, imagen:'https://images.unsplash.com/photo-1633997011021-0254baa23289?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGVsZWN0cmljbyUyMHRvcnJlc3xlbnwwfHwwfHx8MA%3D%3D', title: 'Proyecto', description: 'INSTALACIÓN DE ANTENA SATELITAL', location: 'Junín, Huancayo, Huancayo' },
];

const Section5: React.FC = () => {
    return (

        <div className=" bg-[#44444429] min-h-screen text-whit">
        
            <header className="bg-yellow-500 text-center py-10">

                <h1 className="text-4xl font-bold">NUESTRO TRABAJO</h1>
                <p className="text-lg mt-2">Porque una imagen vale más que mil palabras</p>
            </header>
            <main className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sections.map(section => (
                    <Modulo5 key={section.id} section={section} />
                ))}
            </main>
            <footer className="text-center py-10">
                <button className="mt-4 px-6 py-2 bg-[#FFCC00] text-black font-semibold hover:bg-yellow-500">
                    Ver más de nuestro trabajo 🡭
                </button>
            </footer>
            </div>

    );
};

export default Section5;

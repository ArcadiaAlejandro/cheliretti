import { useState } from 'react';
import video from '/assets/Section_hero_video.mp4';

const sections = {
  telecomunicaciones: {
    title: "Proyectos Innovadores de Telecomunicaciones",
    description: "CHELIRETTI es especialista en construir una gran red de Telecomunicaciones",
  },
  energiaelectrica: {
    title: "Proyectos Innovadores de Energía Eléctrica",
    description: "Soluciones avanzadas en energía eléctrica",
  },
  coubicacion: {
    title: "Proyectos Innovadores de Co-Ubicación",
    description: "Facilitando la co-ubicación eficiente",
  },
  manejodecontingencias: {
    title: "Proyectos Innovadores de Manejo de Contingencias",
    description: "Gestión de riesgos efectiva y segura",
  },
};

type SectionKey = keyof typeof sections;

const Section1 = () => {
  const [activeSection, setActiveSection] = useState<SectionKey>('telecomunicaciones');

  return (
    <div className="relative h-screen overflow-hidden">
      <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-start p-12 md:p-24 lg:p-48">
        <h1 className="text-4xl lg:text-6xl font-bold text-white">
          {sections[activeSection].title}
        </h1>
        <p className="text-xl lg:text-2xl mt-2 text-gray-400 italic">
          Desarrollado desde 0
        </p>
        <p className="text-lg lg:text-xl mt-2 text-white">
          {sections[activeSection].description}
        </p>
        <button className="mt-4 px-6 py-2 bg-[#FFCC00] text-black font-semibold hover:bg-yellow-600">
          Más información sobre nuestros servicios
        </button>
      </div>
      <hr className="relative top-3/4 mx-auto border-t-4 border-yellow-500 w-2/3 md:w-1/2 lg:w-2/3" />
      <div className="absolute bottom-32 w-full flex justify-center space-x-6 md:space-x-8 lg:space-x-32 italic">
        {Object.keys(sections).map((key) => (
          <a
            key={key}
            href="#"
            onClick={() => setActiveSection(key as SectionKey)}
            className="text-white hover:text-[#FFCC00] text-sm md:text-base lg:text-lg"
          >
            {sections[key as SectionKey].title.split(' ')[3]}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Section1;

import React from 'react';

interface SectionProps {
    section: {
        id: number;
        imagen: string;
        title: string;
        description: string;
        location: string;
    };
}

const Modulo5: React.FC<SectionProps> = ({ section }) => {
    return (
        <><section className='bg-[#ffffff] rounded-s-sm shadow-inner shadow-[#ffff]'>
            <div className="absolute top-2 left-2 bg-[#44444452] text-white px-2 rounded">
                {section.title}
            </div>
            <img
                src={section.imagen}
                alt={section.title}
                className="w-full h-48 object-cover"
            />
            <div className="p-2">
                <h3 className="text-lg font-bold">{section.description}</h3>
                <p className="text-sm italic text-zinc-300">{section.location}</p>
        
        </div>
        </section>
        </>
    );
};

export default Modulo5;

import React from 'react';

const projects = [
    { id: 'Proyecto', 
        title: 'INSTALACIÓN DE ANTENA SATELITAL', 
        location: 'Yauris, La Oroya, Junin', 
        imageUrl: 'https://images.unsplash.com/photo-1510877619479-2569d3c6e18f?q=80&w=1846&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },

    { id: 'Proyecto', 
        title: 'INSTALACIÓN DE ANTENA SATELITAL', 
        location: 'Junín, Huancayo, Huancayo', 
        imageUrl: 'https://images.unsplash.com/photo-1509391111737-9b07f052f6b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },

    { id: 'Proyecto', 
        title: 'INSTALACIÓN DE ANTENA SATELITAL', 
        location: 'Barranco, Lima, Lima', 
        imageUrl: 'https://images.unsplash.com/photo-1504250746301-659b6b611c48?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

const Section5: React.FC = () => {
    return (
        <section className="bg-[#444444] text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-bold  text-yellow-400">ULTIMOS PROYECTOS</h2>
                    <p className="mt-2 text-xl text-gray-300 italic">Descubre nuestros proyectos más recientes</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="relative bg-[#5c5c5cbb] rounded-lg overflow-hidden shadow-lg">
                            <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
                            <div className="absolute top-0 left-0 px-4 py-2 bg-gray-800 bg-opacity-75 text-white text-sm font-bold rounded-br-sm">
                                {project.id}
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">{project.title}</h3>
                                <p className="mt-1 text-sm text-gray-300">{project.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <button className="bg-[#FFCC00] hover:bg-[#ffcc00b4] text-black font-bold py-2 px-4 focus:outline-none focus:shadow-outline">
                        Ver más de nuestro trabajo 🡭
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Section5;

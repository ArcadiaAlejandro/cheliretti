const Section3 = () => {

    return (
        <>

        <section className=" text-gray-600 body-font items-center">
            <div className="relative container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <div className="absolute inset-0 bg-black rounded-lg transform -translate-x-2 -translate-y-2"></div>
                <img className="relative object-cover object-center rounded-lg" alt="hero" src="https://plus.unsplash.com/premium_photo-1664695710295-b524b34386db?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            </div>

                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
                <span className="text-2xl text-gray-400 italic font-normal">Conoce sobre nosotros.</span><br />
                    ¿Qué es <strong className="font-bold text-[#FFCC00] italic">CHELIRETTI?</strong>
                    <br className="hidden lg:inline-block"/>
                   
                </h1>
                <br />
                <p className="mb-8 leading-relaxed"> 
                <em>Somos una propuesta innovadora y tu socio estrategico. </em>
                
                <br />
                Nuestra <strong>vasta experiencia </strong>en el campo nacional, nos permite ofrecer soluciones completas y personalizadas que van desde la búsqueda de sitios y obtención de permisos, hasta la ingeniería, supervisión, construcción y mantenimiento de estaciones base celulares, así como la gestión de proyectos electromecánicos en baja, media y alta tensión.
                </p>
                <div className="flex justify-center">
                    <button className="inline-flex mt-4 px-6 py-2 bg-[#FFCC00] text-black font-semibold hover:bg-[#FFCC00] mr-10">Conocer más  🡭</button>
                    <button className="inline-flex mt-4 px-6 py-2 bg-[#FFCC00] text-black font-semibold hover:bg-[#FFCC00]">Nuestros Clientes 🡭</button>
                </div>
                </div>
            </div>
        </section>

        </>
    );
};

export default Section3;
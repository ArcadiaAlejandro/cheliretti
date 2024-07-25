const Section2 = () => {

    return (
            <>
                <section className="flex flex-col lg:flex-row items-center p-8">
                    <div className="flex-1 text-center lg:text-left">
                        <h2 className="text-5xl font-medium mb-4 ">
                        👷 Bienvenido a <strong className="text-yellow-500">Cheliretti</strong>
                        </h2>
                        <br />
                        <p className="text-lg">
                        Cheliretti es una empresa peruana, especializa en brindar servicios integrales en el rubro de energía eléctrica, telecomunicaciones y minería. Ofrecemos una amplia gama de soluciones que abarcan desde la búsqueda y permisos hasta la ingeniería, supervisión, construcción y mantenimiento de estaciones base celulares. Además, ejecutamos proyectos electromecánicos en todos los niveles de tensión.
                        </p>
                    </div>
                    <div className="flex-1 mt-8 lg:mt-0 lg:ml-8">
                        <img
                        src="https://plus.unsplash.com/premium_photo-1661962229590-dd3986bc984e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Team working on a project"
                        className="rounded shadow-lg"
                        />
                    </div>
                    </section>
            </>
        );
    };
    
    export default Section2;
    
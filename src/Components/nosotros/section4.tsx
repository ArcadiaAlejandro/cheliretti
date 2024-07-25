import { FaBullseye, FaBriefcase, FaUsers, FaChalkboardTeacher, FaNewspaper } from 'react-icons/fa';

const Section4 = () => {

    const infoCards = [
        {
          icon: <FaUsers size={30} />,
          title: 'Equipo',
          description:
            'Nuestro equipo está compuesto por profesionales altamente capacitados y experimentados en los sectores de energía eléctrica, telecomunicaciones y minería. Cada miembro aporta una sólida trayectoria en su campo, garantizando la excelencia en cada proyecto que emprendemos.',
        },
        {
          icon: <FaChalkboardTeacher size={30} />,
          title: 'Junta Directiva',
          description:
            'Nuestra junta directiva está formada por líderes visionarios y expertos en diversas áreas estratégicas. Guiados por una visión compartida de crecimiento sostenible y liderazgo en el mercado, supervisan y dirigen las operaciones de Cheliretti hacia el éxito continuo.',
        },
        {
          icon: <FaNewspaper size={30} />,
          title: 'Prensa',
          description:
            'Mantenemos a los medios y al público informados sobre las últimas noticias, actualizaciones de proyectos y eventos relevantes relacionados con Cheliretti. Aquí encontrarás comunicados de prensa, artículos destacados y contenido multimedia que destaca nuestro compromiso con la innovación, la responsabilidad social y los logros significativos en nuestra industria.',
        },
      ];

    return (
        <section className="flex flex-col lg:flex-row p-8 space-y-8 lg:space-y-0 lg:space-x-8">
            <div className="flex-1 mb-8 lg:mb-0">
              <br />
                <div className="mb-8 flex items-center">
                    <FaBullseye className="text-primary mr-3 " size={30} />
                    <h2 className="text-3xl font-bold">Nuestra Visión</h2>
                </div>
                <p className="text-lg mb-4 text-gray-500">
                    Ser el aliado estratégico por excelencia de nuestros clientes, siendo siempre su primera opción para la ejecución de sus proyectos a nivel nacional.
                </p>
                <br />
                <br />
                <div className="mb-8 flex items-center">
                    <FaBriefcase className="text-primary mr-3" size={30} />
                    <h2 className="text-3xl font-bold">Nuestra Misión</h2>
                </div>
                <p className="text-lg text-gray-500">
                    Somos una empresa dedicada al desarrollo de proyectos de Estación Base Celular, proyectos Electromecánicos y proyectos de Coubicación. Nuestro compromiso es alcanzar el 100% de satisfacción de nuestros clientes, basado en nuestros altos estándares de calidad y cumplimiento de plazos.
                </p>
            </div>
            <div className="flex-1 flex flex-col space-y-4">
                {infoCards.map((card, index) => (
                    <div key={index} className="p-4 border rounded-lg shadow-sm bg-[#ffcc00]">
                        <div className="flex items-center mb-2">
                            <div className="text-primary mr-2">{card.icon}</div>
                            <h3 className="text-xl font-semibold">{card.title}</h3>
                        </div>
                        <p className="text-sm">{card.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Section4;

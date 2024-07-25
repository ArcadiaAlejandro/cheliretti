import { FaBrain , FaChartLine, FaShieldAlt } from 'react-icons/fa';
const Section3 = () => {

    const stats = [
        {
          icon: <FaBrain className='text-yellow-500' size={40} />,
          title: 'Experiencia y Expertise',
          description:
            'Nuestro equipo cuenta con una profunda experiencia en cada fase del proceso, respaldada por un historial probado de éxito en proyectos complejos.',
        },
        {
          icon: <FaChartLine className='text-yellow-500'  size={40} />,
          title: 'Innovación y Adaptabilidad',
          description:
            'Abrazamos la innovación y nos adaptamos rápidamente a las necesidades cambiantes del mercado y de nuestros clientes.',
        },
        {
          icon: <FaShieldAlt className='text-yellow-500' size={40} />,
          title: 'Compromiso con la Calidad',
          description:
            'Garantizamos resultados superiores mediante un riguroso control de calidad y un enfoque meticuloso en cada detalle.',
        },
      ];

    return (
            <> 
                <section className="flex flex-col lg:flex-row justify-around items-center p-8 bg-gray-100">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center max-w-xs text-center mb-8 lg:mb-0">
                        <div className="mb-4 text-primary">{stat.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{stat.title}</h3>
                        <p className="text-sm text-gray-400" >{stat.description}</p>
                        </div>
                ))}
                </section>
            </>
        );
    };
    
    export default Section3;
    
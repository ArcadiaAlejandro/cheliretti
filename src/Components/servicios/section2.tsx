import { FaSatelliteDish, FaBolt } from 'react-icons/fa';
import { GiElectric } from 'react-icons/gi';

const servicios = [
    {
        id: 1,
        icon: <FaSatelliteDish size={50} />,
        title: 'Telecomunicaciones',
        description: [
            '* Gestiones de búsqueda de candidatos.',
            '* Gestión de permisos.',
            '* Ingeniería.',
            '* Construcción de estaciones base celular, obra civil y energía llave en mano.',
            '* Gestión y manejo de contingencia al éxito.',
            '* Mantenimientos de estaciones base celular.',
            '* TSS (Technical Site Survey Report).',
        ],
    },
    {
        id: 2,
        icon: <FaBolt size={50} />,
        title: 'Energía Eléctrica (Telecom)',
        description: [
            '* Factibilidad e instalación de nuevos suministros eléctricos en BT.',
            '* Saneamiento de LBT y LMT.',
            '* Construcción de LBT / LMT aéreo y subterráneo.',
            '* Instalación de tableros monofásicos 220vac y trifásicos 220 / 380vac.',
            '* Mantenimientos preventivos, correctivos y predictivos de redes eléctricas en BT y MT.',
            '* Megados, medición de puestas a tierra, cargas y pruebas eléctricas.',
        ],
    },
    {
        id: 3,
        icon: <GiElectric size={50} />,
        title: 'Co-Ubicación',
        description: [
            '* Factibilidad técnica de solución de coubicación.',
            '* Adecuaciones en EBC para coubicaciones.',
            '* Gestión e instalación de energía eléctrica (provisional y/o definitiva) para operador coubicado.',
        ],
    },
];

const section2: React.FC = () => {
    return (
        <div className="bg-gray-100 py-20">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-gray-700">NUESTROS SERVICIOS</h1>
            </div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {servicios.map((servicio) => (
                    <div key={servicio.id} className="bg-white rounded-lg shadow-lg p-6 text-center">
                        <div className="flex justify-center mb-4 text-yellow-500">
                            {servicio.icon}
                        </div>
                        <h2 className="text-2xl font-bold mb-4">{servicio.title}</h2>
                        <ul className="text-left">
                            {servicio.description.map((desc, index) => (
                                <li key={index} className="text-gray-600 mb-2">{desc}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default section2;

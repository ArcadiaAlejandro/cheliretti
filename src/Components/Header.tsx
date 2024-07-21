import { Link } from 'react-router-dom';

import logo from '../assets/Logo.svg';
const Header: React.FC = () => {

  
    return (
        <header className="text-white body-font bg-[#444444] fixed top-0 left-0 right-0 z-20 shadow-md">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <img src={logo} alt="Logo" className="h-8 sm:h-10" />
            </a>
            <button
                aria-label="Toggle menu"
                className="inline-flex md:hidden items-center bg-[#FFCC00] p-2 rounded text-base focus:outline-none"
            >
                <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
                >
                <path d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
            <nav className='md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center'>
                <Link to='/Home' className="mr-5 hover:text-gray-400">Inicio</Link>
                <Link to='/SobreNosotros' className="mr-5 hover:text-gray-400">Sobre Nosotros</Link>
                <Link to='/Servicios' className="mr-5 hover:text-gray-400">Servicios</Link>
                <Link to='/Proyectos' className="mr-5 hover:text-gray-400">Proyectos</Link>
                <Link to='/Contacto' className="mr-5 hover:text-gray-400">Contáctanos</Link>

            </nav>
            <button className="inline-flex items-center bg-[#FFCC00] border-0 py-1 px-3 focus:outline-none hover:bg-gray-400 rounded text-base mt-4 md:mt-0"
                aria-label="Escríbenos">
                Escríbenos
            </button>
            </div>
        </header>
    );
};

export default Header;
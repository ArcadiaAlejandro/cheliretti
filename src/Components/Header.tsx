import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '/assets/Logo.svg';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="text-white body-font bg-[#444444] fixed top-0 left-0 right-0 z-20 shadow-md">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <Link to='/'> <img src={logo} alt="Logo" className="h-12 sm:h-16 " /> </Link>
                </a>
                <button
                    aria-label="Toggle menu"
                    className="inline-flex md:hidden items-center bg-[#FFCC00] p-2 rounded text-base focus:outline-none"
                    onClick={toggleMenu}
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
                        <path d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                    </svg>
                </button>
                <nav
                    className={`md:flex flex-grow items-center text-base justify-center md:justify-start transition-transform duration-300 ease-in-out 
                        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} 
                        md:translate-x-0 md:relative absolute top-full left-0 w-full md:w-auto bg-[#444444] md:bg-transparent 
                        px-6  md:px-12 lg:px-24 xl:px-60`}
                >
                    <Link to='/' className="block md:inline-block px-4 py-2 text-white hover:text-gray-400">Inicio</Link>
                    <Link to='/SobreNosotros' className="block md:inline-block px-4 py-2 text-white hover:text-gray-400">Sobre Nosotros</Link>
                    <Link to='/Servicios' className="block md:inline-block px-4 py-2 text-white hover:text-gray-400">Servicios</Link>
                    <Link to='/Proyectos' className="block md:inline-block px-4 py-2 text-white hover:text-gray-400">Proyectos</Link>
                    <Link to='/Contacto' className="block md:inline-block px-4 py-2 text-white hover:text-gray-400">Contáctanos</Link>
                </nav>
                <a href="https://wa.me/message/HWIKSF7KRY4TJ1"><button className="inline-flex items-center bg-[#FFCC00] py-1 px-3 focus:outline-none hover:bg-gray-400 rounded text-base text-gray-600 mt-4 md:mt-0"
                    aria-label="Escríbenos"
                    >
                    Escríbenos
                </button></a>
            </div>
        </header>
    );
};

export default Header;

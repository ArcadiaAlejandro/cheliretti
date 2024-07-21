import logo from '../assets/Logo.svg';
const Footer = () => {
    return (
    <>
     <footer className="text-gray-600 body-font bg-[#444444] text-white">
      <div className="container px-5 py-24 mx-auto flex md:items-start lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CORPORATIVO</h2>
            <nav className="list-none mb-10">
              <ul>
                <li><a className="text-gray-400 hover:text-white">Página Principal</a></li>
                <li><a className="text-gray-400 hover:text-white">Sobre Nosotros</a></li>
                <li><a className="text-gray-400 hover:text-white">Ubicación</a></li>
                <li><a className="text-gray-400 hover:text-white">Sostenibilidad</a></li>
                <li><a className="text-gray-400 hover:text-white">Contactanos</a></li>
              </ul>
            </nav>
          </div>
          <div className="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">MERCADO</h2>
            <nav className="list-none mb-10">
              <ul>
                <li><a className="text-gray-400 hover:text-white">Recursos Humanos</a></li>
                <li><a className="text-gray-400 hover:text-white">Administración y Cumplimiento</a></li>
                <li><a className="text-gray-400 hover:text-white">Ingeniería</a></li>
                <li><a className="text-gray-400 hover:text-white">Construcción</a></li>
                <li><a className="text-gray-400 hover:text-white">Telecomunicaciones</a></li>
                <li><a className="text-gray-400 hover:text-white">Energía Eléctrica</a></li>
              </ul>
            </nav>
          </div>

          <div className="w-80 flex-shrink-0 md:mx-30 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
              <img src={logo} alt="Logo" />
            </a>
          </div>

          <div className="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">SERVICIOS</h2>
            <nav className="list-none mb-10">
              <ul>
                <li><a className="text-gray-400 hover:text-white">Telecomunicaciones</a></li>
                <li><a className="text-gray-400 hover:text-white">Co-Ubicación</a></li>
                <li><a className="text-gray-400 hover:text-white">Energía Eléctrica</a></li>
                <li><a className="text-gray-400 hover:text-white">Manejo de Contingencias</a></li>
              </ul>
            </nav>
          </div>

          <div className="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">SERVICIOS</h2>
            <nav className="list-none mb-10">
              <ul>
                <li><a className="text-gray-400 hover:text-white">Telecomunicaciones</a></li>
                <li><a className="text-gray-400 hover:text-white">Co-Ubicación</a></li>
                <li><a className="text-gray-400 hover:text-white">Energía Eléctrica</a></li>
                <li><a className="text-gray-400 hover:text-white">Manejo de Contingencias</a></li>
              </ul>
            </nav>
          </div>

        </div>
      </div>
      <div className="bg-black">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
            Cheliretti Corporation © 2024. Todos los derechos reservados. 
            <a href="#" className="text-gray-400 ml-2 hover:text-white">Declaración de Privacidad</a>
            <span className="mx-2">|</span>
            <a href="#" className="text-gray-400 hover:text-white">Términos y condiciones</a>
            <span className="mx-2">|</span>
            <a href="#" className="text-gray-400 hover:text-white">Accesibilidad</a>
            <span className="mx-2">|</span>
            <a href="#" className="text-gray-400 hover:text-white">Configuración de cookies</a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
    </>
    )
}

export default Footer;
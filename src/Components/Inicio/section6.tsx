import { Link } from 'react-router-dom';
const Section6 = () => {
    return (
        <div className="relative flex flex-col items-center justify-center  p-8 sm:p-12">
        <div className="w-full max-w-4xl bg-white p-14">
          <div className="flex flex-col items-center">
            <span className="rounded-lg bg-[#444444] py-px px-2 text-sm text-white"><strong>+ 18</strong> empresas trabajan con nosotros</span>
            <h3 className="mt-2 max-w-2xl text-center text-2xl font-bold leading-tight sm:text-3xl md:text-4xl md:leading-tight">NO
            ESPERES MÁS, CONTÁCTANOS </h3>
            <p className="italic">
               y ten la mejor experiencia de calidad con nuestros servicios.
            </p>
            <Link to='/Contacto'><button className="inline-flex mt-4 px-6 py-2 bg-[#FFCC00] text-black font-semibold hover:bg-[#FFCC00]">Contáctanos 🡭</button></Link>
          </div>
        </div>
      </div>
    );
};

export default Section6;

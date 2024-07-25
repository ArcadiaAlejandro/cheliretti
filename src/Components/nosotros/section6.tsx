
import aliado1 from '../../assets/aliados/3APROYECTOS.svg'
import aliado2 from '../../assets/aliados/Molisa Ingenieros.svg'
import aliado3 from '../../assets/aliados/QMC.svg'
import aliado4 from '../../assets/aliados/TR .svg'
import aliado5 from '../../assets/aliados/turistelecom.svg'

const logos = [
    aliado1,
    aliado2,
    aliado3,
    aliado4,
    aliado5,
  ];

const Section7 = () => {

    

    return (
       
        <section className="bg-gray-100">
  <div className="flex items-center justify-center h-full">
    <div className="mx-auto w-full max-w-7xl px-5 md:px-10 md:py-20">
      <h5 className="mb-12 text-xl font-semibold md:mb-16 lg:mb-20 lg:text-5xl text-[#0000005a] text-center">
        Empresas que ya confían en <span className="font-medium text-[#ffcc00]">NOSOTROS</span>
      </h5>
      
      <div className="flex overflow-hidden space-x-40 group">
        <div className="flex space-x-52 animate-loop-scroll">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={logo}
                alt={`Logo ${index}`}
                className="max-w-none w-52 filter grayscale transition-all duration-2 hover:filter-none"
              />
            </div>
          ))}
        </div>
        <div className="flex space-x-16 animate-loop-scroll" aria-hidden="true">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={logo}
                alt={`Logo ${index}`}
                className="max-w-none w-20 filter grayscale transition-all duration-300 hover:filter-none"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

    );
};

export default Section7;

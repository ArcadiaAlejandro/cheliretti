import Excelencia from '/assets/Excelencia.svg';
import Eficiencia from '/assets/Eficiencia.svg';
import Eficacia from '/assets/Eficacia.svg';

const Section4 = () => {

    return (
        <>

<section className="py-12 bg-white">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap justify-center">
      <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <div className="flex justify-center mb-4">
            <img src={Excelencia} alt="Excelencia" />
          </div>
          <h4 className="text-lg font-semibold mb-2">Excelencia</h4>
          <p className="text-gray-600">Nos esforzamos por ofrecer servicios de la más alta calidad, superando constantemente las expectativas de nuestros clientes y garantizando resultados excepcionales en cada proyecto.</p>
        </div>
      </div>
      <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <div className="flex justify-center mb-4">
            <img src={Eficiencia} alt="Eficiencia" />  
          </div>
          <h4 className="text-lg font-semibold mb-2">Eficiencia </h4>
          <p className="text-gray-600">Optimizamos nuestros procesos para maximizar el uso de recursos y tiempo, asegurando que cada proyecto se complete de manera efectiva y dentro de los plazos establecidos.</p>
        </div>
      </div>
      <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <div className="flex justify-center mb-4">
            <img src={Eficacia} alt="Eficacia" />
          </div>
          <h4 className="text-lg font-semibold mb-2">Eficacia</h4>
          <p className="text-gray-600">Nos comprometemos a cumplir con los objetivos y metas planteadas, proporcionando soluciones precisas y efectivas que satisfacen las necesidades específicas de nuestros clientes.</p>
        </div>
      </div>
    </div>
  </div>
</section>


</>
);
};

export default Section4;
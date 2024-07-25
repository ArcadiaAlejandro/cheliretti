const Section2 = () => {
  return (
      <>
      <section className="bg-gray-100 py-12 px-4">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-52">
              {/* Texto e Información */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                  <p className="text-base mb-4">
                      Cheliretti es una de las organizaciones más grandes y respetadas en ingeniería y construcción de telecomunicaciones dentro del ámbito peruano.
                      <br/><br/>
                      Nuestro compromiso basado en la seguridad, la calidad y la conservación del medio ambiente nos ha llevado a ser visibles a lo largo de toda la nación. Siendo un líder en la excelencia de los proyectos que realizamos.
                  </p>
                  <a href="#" className="text-gray-400 hover:text-gray-600 mb-4 block">Más información sobre Cheliretti ↗</a>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                      <button className="bg-[#FFCC00] text-white px-4 py-2">Ingeniería</button>
                      <button className="bg-[#FFCC00] text-white px-4 py-2">Construcción</button>
                  </div>
              </div>

              {/* Estadísticas */}
              <div className="w-full md:w-1/6 flex flex-col justify-center items-center md:items-start space-y-8">
                  <div className="flex items-center">
                      <div className="border-l-4 border-[#FFCC00] h-16 mr-2"></div>
                      <div>
                          <h1 className="text-2xl md:text-3xl font-semibold">S/ 17,000</h1>
                          <span className="block font-bold text-lg md:text-xl">Millones de soles</span>
                          <small className="text-gray-600">Generados en toda nuestra trayectoria</small>
                      </div>
                  </div>
                  <div className="flex items-center">
                      <div className="border-l-4 border-[#FFCC00] h-16 mr-2"></div>
                      <div>
                          <h1 className="text-2xl md:text-3xl font-semibold">10</h1>
                          <span className="block font-bold text-lg md:text-xl">Empleados</span>
                          <small className="text-gray-600">Altamente capacitados y calificados</small>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      </>
  );
};

export default Section2;

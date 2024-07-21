
const Section2 = () => {

    return (
        <>
      <div className="flex items-center justify-center h-96 bg-gray-100">
  <div className="flex w-3/4">
    <div className="w-1/2 text-left">
      <p className="text-base">
        Cheliretti es una de las organizaciones más grandes y respetadas en ingeniería y construcción de telecomunicaciones dentro del ámbito peruano.
        <br/><br/>
        Nuestro compromiso basado en la seguridad, la calidad y la conservación del medio ambiente. Nos han llevado a ser visibles a lo largo de toda la nación. Siendo un líder en la excelencia de los proyectos que realizamos.
      </p>
      <br />
      <a href="#" className="text-gray-400">Más información sobre Cheliretti ↗</a>
      <div className="mt-4">
        <button className="bg-[#FFCC00] text-white px-4 py-2 mr-2">Ingeniería</button>
        <button className="bg-[#FFCC00] text-white px-4 py-2">Construcción</button>
      </div>
    </div>
    <div className="w-1/2 flex flex-col justify-between items-center">
      <div className="flex items-center mb-8">
        <div className="border-l-4 border-[#FFCC00] h-16 mr-2"></div>
        <div>
          <h1 className="text-3xl font-semibold">S/ 17,000</h1>
          <span className="block font-bold text-xl">Millones de soles</span>
          <small className="text-gray-600">Generados en toda nuestra trayectoria</small>
        </div>
      </div>
      <div className="flex items-center">
        <div className="border-l-4 border-[#FFCC00] h-16 mr-2"></div>
        <div>
          <h1 className="text-3xl font-semibold">10</h1>
          <span className="block font-bold text-xl">Empleados</span>
          <small className="text-gray-600">Altamente capacitados y calificados</small>
        </div>
      </div>
    </div>
  </div>
</div>



        </>
    );
};

export default Section2;


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
            <form action="" className="mx-auto mt-4 flex w-full max-w-md flex-col gap-3 sm:flex-row sm:gap-0">
              <input type="email" name="email" id="email" className="grow rounded border-2 border-gray-300 py-3 px-3 focus:border-[#FFCC00] focus:outline-none sm:rounded-l-md sm:rounded-r-none sm:border-r-0" placeholder="Ingresa tu Correo Electronico" />
              <button type="submit" className="rounded bg-[#FFCC00] px-5 py-4 font-bold text-white sm:rounded-l-none sm:rounded-r-md">Enviar email</button>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Section6;

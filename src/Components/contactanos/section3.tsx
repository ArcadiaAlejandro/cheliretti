import React from 'react';
import emailjs from 'emailjs-com';

const Section3: React.FC = () => {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm('service_v5estfv', 'template_ykya62q', e.currentTarget, '_k_NJ4g7HsLwBcpC2')
      .then((result) => {
          console.log(result.text);
          alert('Mensaje enviado exitosamente');
      }, (error) => {
          console.log(error.text);
          alert('Hubo un error al enviar el mensaje');
      });

    e.currentTarget.reset();
  };

  return (
    <div className="bg-custom">
      <form className="max-w-lg mx-auto p-8 bg-white shadow-md rounded" onSubmit={sendEmail}>
        <div className="mb-4 py-5">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Nombre Completo <span className="text-red-500">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="from_name"
            placeholder="Nombre Completo"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Dirección de Correo Electrónico <span className="text-red-500">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            placeholder="Correo Electrónico"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
            Ubicación actual (Ciudad, Estado, Provincia) <span className="text-red-500">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="location"
            type="text"
            name="location"
            placeholder="Ubicación actual"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="organization">
            Organización <span className="text-red-500">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="organization"
            type="text"
            name="organization"
            placeholder="Organización"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
            Número de Celular <span className="text-red-500">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="tel"
            name="phone"
            placeholder="Número de Celular"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
            Asunto de Consulta <span className="text-red-500">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="subject"
            type="text"
            name="subject"
            placeholder="Asunto de Consulta"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Mensaje <span className="text-red-500">*</span>
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            name="message"
            placeholder="Mensaje"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox" required />
            <span className="ml-2 text-gray-700 text-sm">
              Al marcar esta casilla, reconozco que he revisado la <a href="#" className="text-blue-500">declaración de privacidad</a> de este sitio web y, al enviar este formulario, acepto sus términos.
            </span>
          </label>
        </div>
        <div className="mb-4">
          <div className="g-recaptcha" data-sitekey="your_site_key"></div>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Section3;

const Footer = () => {
    return (
      <div className="w-full h-[30vh] max-sm:h-[40vh] flex max-sm:flex-col items-center justify-around font-lato" id="contacto">
        <div className="flex flex-col items-center justify-center">
          <img
          className="w-28"
            src="assets/logo_raven.webp"
            alt="logo raven tattoo pereira"
          ></img>
          <h2 className="text-blanco">RAVEN TATTOO PEREIRA</h2>
          <a href="https://maps.app.goo.gl/W11teSLC9BddpaDD6"
            aria-label="raven tattoo studio pereira mapa"
            target="_blank"
            rel="noopener noreferrer"><h3 className="underline text-blue-600">Ver mapa</h3></a>
        </div>
        <div>
          <a
            href="https://wa.me/3154791507?text=Para obtener tu cotización y tu cita envianos una imagen de referencia del diseño que quieres, una foto del lugar de tu cuerpo que deseas tatuar y tamaño aproximado en cm y te damos toda la información"
            aria-label="Whatsapp raven tattoo pereira"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-2"
          >
            <img
              src="icons/whatsapp-icon.svg"
              alt="Whatsapp raven tattoo pereira"
            ></img>
          </a>
          <a
            href="https://www.instagram.com/raventattooshopoficial/"
            aria-label="Instagram raven tattoo pereira"
            target="_blank"
            className="mr-2"
            rel="noopener noreferrer"
          >
            <img
              src="icons/instagram-icon.svg"
              alt="Instagram raven tattoo pereira"
            ></img>
          </a>
  
          <a href="https://davidladino.netlify.app/"
            aria-label="David Ladino Portfolio"
            target="_blank"
            className="text-blanco text-center absolute mt-10"
            rel="noopener noreferrer">Developed by David Ladino</a>
        </div>
      </div>
    );
  };
  
  export default Footer;
  
import galleryData from "../data/galeria.json";
import { useState } from "react";
import { XIcon } from "@heroicons/react/outline";
import { ArrowRightIcon } from "@heroicons/react/outline";

const Joyeria = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const sendWhatsApp = () => {
    const phonenumber = "3154791507";

    const url = `https://wa.me/${phonenumber}?text=¡Estamos aquí para ayudarte! Por favor, específica qué tipo de joya de oro te interesa para proporcionarte información detallada`;

    window.open(url, "_blank").focus();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendWhatsApp();
  };

  return (
    <>
      <div className="w-full h-[70vh] font-libre text-blanco flex flex-col justify-center items-center">
        <div className="relative text-center">
          <h1 className="font-semibold text-6xl max-sm:text-4xl">
            JOYERIA ORO
          </h1>
        </div>
        <div className="w-full flex justify-center mt-9">
          <button
            onClick={handleSubmit}
            className="flex items-center justify-center w-56 text-xl max-sm:text-lg font-semibold bg-naranja hover:bg-blanco text-black hover:text-black border border-naranja hover:border-transparent rounded-xl transition-all duration-700"
            aria-label="comprar joyeria raven tattoo pereira"
          >
            <span className="py-2">COMPRAR</span>
            <ArrowRightIcon className="w-6 ml-3" />
          </button>
        </div>
        <img
          src="backgrounds/joyeriaBackground.webp"
          className="object-cover max-sm:object-none w-full h-screen -z-10 absolute opacity-80"
          alt="Background Image"
        />
      </div>
      <div className="gallery flex flex-wrap justify-center mt-32 max-sm:flex-col mb-20">
        {galleryData.joyeria.map((item, index) => (
          <div
            key={index}
            className="media-item w-full sm:w-1/2 md:w-1/2 lg:w-1/5 px-4 mb-4"
          >
            <div
              className="card h-400 cursor-pointer"
              onClick={() => handleImageClick(item.src)}
            >
              {item.type === "photo" ? (
                <img
                  className="rounded-lg shadow-lg"
                  src={item.src}
                  alt={item.alt}
                />
              ) : (
                <video src={item.src} controls />
              )}
            </div>
          </div>
        ))}
        {selectedImage && (
          <div className="z-[5] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[80%] max-sm:h-2/4 max-sm:w-3/4 bg-transparent rounded-lg shadow-lg overflow-hidden">
            <div className="flex items-center justify-center h-full">
              <img
                src={selectedImage}
                alt="Ojoxojo tattoo"
                className="max-w-full max-h-full"
              />
            </div>
            <button
              aria-label="cerrar imagen"
              className="absolute top-4 right-4 rounded-full bg-black p-2 hover:bg-blanco"
              onClick={() => setSelectedImage(null)}
            >
              <XIcon className="w-5 text-blanco text-3xl hover:text-black" />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Joyeria;

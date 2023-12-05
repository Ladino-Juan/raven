import Carousel from "../components/Carousel";
import { ElfsightWidget } from "react-elfsight-widget";
import { ArrowRightIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const sendWhatsApp = () => {
    const phonenumber = "3154791507";

    const url = `https://wa.me/${phonenumber}?text=Para obtener tu cotización y tu cita envianos una imagen de referencia del diseño que quieres, una foto del lugar de tu cuerpo que deseas tatuar y tamaño aproximado en cm y te damos toda la información`;

    window.open(url, "_blank").focus();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendWhatsApp();
  };

  return (
    <>
      <div className="w-full h-screen font-lato flex flex-col justify-center items-center">
        <img src="backgrounds/raven_title.webp" alt="raven tattoo studio"></img>
        <div className="w-full flex justify-center mt-9">
          <button
            onClick={handleSubmit}
            className="flex items-center justify-center w-56 text-xl max-sm:text-lg font-semibold bg-naranja hover:bg-blanco text-black hover:text-black border border-naranja hover:border-transparent rounded-xl transition-all duration-700"
            aria-label="agendar cita raven tattoo pereira"
          >
            <span className="py-2">AGENDAR CITA</span>
            <ArrowRightIcon className="w-6 ml-3" />
          </button>
        </div>
        <img
          src="backgrounds/skull.webp"
          className="object-cover max-sm:object-none w-full h-screen -z-10 absolute opacity-40"
          alt="skull raven tattoo pereira"
        ></img>
      </div>
      <Carousel />
      <div className="w-full h-[200vh] font-lato flex flex-col justify-around items-center">
        <div className="font-lato text-blanco w-[40vw] max-sm:w-[80vw] text-center">
          <h2 className="font-semibold text-6xl max-sm:text-4xl">
            CONOCE NUESTROS ARTISTAS
          </h2>
          <br></br>
          <p className="font-medium text-2xl max-sm:text-lg">
            Ven y vive una experiencia única en nuestro estudio de tatuajes.
            Aquí encontrarás artistas talentosos y profesionales que te ayudarán
            a crear el diseño de tus sueños.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-center w-[80%]">
          <div className="w-full md:w-1/2 lg:w-64 hover:scale-110 mb-4">
            <a
              onClick={() => navigate("/bastyan")}
              aria-label="Daniel Mejia raven tatto pereira galeria"
            >
              <img
                src="assets/bastyanProfile.webp"
                className="object-cover w-full h-full cursor-pointer rounded-xl"
                alt="Bastyan raven tattoo"
              ></img>
            </a>
          </div>

          <div className="w-full md:w-1/2 lg:w-64 hover:scale-110 mb-4">
            <a
              onClick={() => navigate("/jorge_yarce")}
              aria-label="Jorge Yarce raven tatto pereira galeria"
            >
              <img
                src="assets/jorgeProfile.webp"
                className="object-cover w-full h-full cursor-pointer rounded-xl"
                alt="Jorge raven tattoo"
              ></img>
            </a>
          </div>
          <div className="w-full md:w-1/2 lg:w-64 hover:scale-110 mb-4">
            <a
              onClick={() => navigate("/julio_lenis")}
              aria-label="Julio Lenis raven tatto pereira galeria"
            >
              <img
                src="assets/julioProfile.webp"
                className="object-cover w-full h-full cursor-pointer rounded-xl"
                alt="Julio raven tattoo"
              ></img>
            </a>
          </div>
          <div className="w-full md:w-1/2 lg:w-64 hover:scale-110 mb-4">
            <a
              onClick={() => navigate("/daniel_mejia")}
              aria-label="Daniel Mejia raven tatto pereira galeria"
            >
              <img
                src="assets/danielProfile.webp"
                className="object-cover w-full h-full roundel-xl cursor-pointer rounded-xl"
                alt="Daniel raven tattoo"
              ></img>
            </a>
          </div>
          <div className="w-full md:w-1/2 lg:w-64 hover:scale-110 mb-4">
            <a
              onClick={() => navigate("/valen_muver")}
              aria-label="Valentina Muver raven tatto pereira galeria"
            >
              <img
                src="assets/valenProfile.webp"
                className="object-cover w-full h-full roundel-xl cursor-pointer rounded-xl"
                alt="Valentina raven tattoo"
              ></img>
            </a>
          </div>
          <div className="w-full md:w-1/2 lg:w-64 hover:scale-110 mb-4">
            <a
              onClick={() => navigate("/mauro_acero")}
              aria-label="Mauro Acero raven tatto pereira galeria"
            >
              <img
                src="assets/mauroProfile.webp"
                className="object-cover w-full h-full roundel-xl cursor-pointer rounded-xl"
                alt="Mauro raven tattoo"
              ></img>
            </a>
          </div>
          <div className="w-full md:w-1/2 lg:w-64 hover:scale-110 mb-4">
            <a
              onClick={() => navigate("/chris_restrepo")}
              aria-label="Chris Restrepo raven tatto pereira galeria"
            >
              <img
                src="assets/ChrisProfile.webp"
                className="object-cover w-full h-full roundel-xl cursor-pointer rounded-xl"
                alt="Chris raven tattoo"
              ></img>
            </a>
          </div>
        </div>
      </div>

      <div className="w-full overflow-hidden">
        <ElfsightWidget widgetId="53e3d8c3-f261-4d9e-9713-21d5754f0bdd" lazy />
      </div>
    </>
  );
};

export default Home;

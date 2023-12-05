import Gallery from "../components/Gallery"


const ValenGallery = () => {
    return (
        <>
        <div className="w-full h-[70vh] font-libre text-blanco flex flex-col justify-center items-center">
          <div className="relative text-center">
            <h1 className="font-semibold text-6xl max-sm:text-4xl">VALEN MUVER</h1>
            <br></br>
            <p className="font-medium text-2xl max-sm:text-lg">
              Tatuadora profesional de la ciudad de Pereira
            </p>
          </div>
          <img
            src="backgrounds/valenBackground.webp"
            className="object-cover max-sm:object-scale-down w-full h-screen -z-10 absolute opacity-60 mt-24"
            alt="Background Image"
          ></img>
        </div>
        <Gallery artista="valen"/>
        </>
      )
}

export default ValenGallery
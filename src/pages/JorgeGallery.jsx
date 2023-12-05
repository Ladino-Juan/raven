import Gallery from "../components/Gallery"


const JorgeGallery = () => {
  return (
    <>
    <div className="w-full h-[70vh] font-libre text-blanco flex flex-col justify-center items-center mt-36">
      <div className="relative text-center">
        <h1 className="font-semibold text-6xl max-sm:text-4xl">JORGE YARCE</h1>
        <br></br>
        <p className="font-medium text-2xl max-sm:text-lg">
          Tatuador profesional de la ciudad de Pereira
        </p>
      </div>
      <img
        src="backgrounds/jorgeBackground.jpg"
        className="object-cover max-sm:object-none w-full h-screen -z-10 absolute opacity-40"
        alt="Background Image"
      ></img>
    </div>
    <Gallery artista="jorge"/>
    </>
  )
}

export default JorgeGallery
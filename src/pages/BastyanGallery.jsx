import Gallery from "../components/Gallery"


const BastyanGallery = () => {
  return (
    <>
    <div className="w-full h-[70vh] font-libre text-blanco flex flex-col justify-center items-center mt-24">
      <div className="relative text-center">
        <h1 className="font-semibold text-6xl max-sm:text-4xl">BASTYAN ESCOBAR</h1>
        <br></br>
        <p className="font-medium text-2xl max-sm:text-lg">
          Piercer profesional de la ciudad de Pereira
        </p>
      </div>
      <img
        src="backgrounds/bastyanBackground.jpg"
        className="object-cover object-bottom max-sm:object-none w-full h-screen -z-10 absolute opacity-60"
        alt="Background Image"
      ></img>
    </div>
    <Gallery artista="bastyan"/>
    </>
  )
}

export default BastyanGallery
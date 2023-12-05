import { useState } from "react";
import PropTypes from "prop-types";
import { XIcon } from "@heroicons/react/outline";
import galleryData from "../data/galeria.json";

const Gallery = (props) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 12;

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const { artista } = props;

  let artistGallery;

  switch (artista) {
    case "daniel":
      artistGallery = galleryData.artistaDaniel;
      break;
    case "bastyan":
      artistGallery = galleryData.artistaBastyan;
      break;
    case "julio":
      artistGallery = galleryData.artistaJulio;
      break;
    case "jorge":
      artistGallery = galleryData.artistaJorge;
      break;
    case "valen":
      artistGallery = galleryData.artistaValen;
      break;
    case "mauro":
      artistGallery = galleryData.artistaMauro;
      break;
    case "chris":
      artistGallery = galleryData.artistaChris;
      break;
    default:
      artistGallery = [];
  }
  // Calculate pagination
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = artistGallery.slice(
    indexOfFirstImage,
    indexOfLastImage
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="gallery flex flex-wrap justify-center items-center mt-32 max-sm:flex-col mb-20">
      {currentImages.map((item, index) => (
        <div
          key={index}
          className="media-item sm:w-1/2 md:w-2/3 lg:w-1/4 px-7 mt-10"
        >
          <div
            className="card h-400 cursor-pointer"
            onClick={() => handleImageClick(item.src)}
          >
            {item.type === "photo" ? (
              <img
                className="rounded-lg shadow-lg"
                src={item.src}
                alt={"raven tattoo pereira"}
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
              alt="raven tattoo pereira"
              className="max-w-full max-h-full"
            />
          </div>
          <button
            aria-label="cerrar imagen"
            className="absolute top-4 right-4 rounded-full bg-black p-2 hover:bg-white "
            onClick={() => setSelectedImage(null)}
          >
            <XIcon className="w-5 text-white text-3xl hover:text-naranja" />
          </button>
        </div>
      )}
      <div className="pagination">
        {artistGallery.length > imagesPerPage && (
          <ul className="flex justify-center mt-4">
            {Array.from(
              { length: Math.ceil(artistGallery.length / imagesPerPage) },
              (_, index) => (
                <li key={index}>
                  <button
                    className={`px-4 py-2 mx-1 rounded-full ${
                      currentPage === index + 1
                        ? "bg-gray-300 text-gray-700"
                        : "bg-gray-800 text-white"
                    }`}
                    onClick={() => paginate(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              )
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

Gallery.propTypes = {
  artista: PropTypes.string.isRequired,
};

export default Gallery;

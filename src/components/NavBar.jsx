import { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="bg-black w-full h-[50px] fixed top-0 z-50">
      <div className="px-2 flex justify-around items-center w-full h-full text-xs">
        <a
          onClick={() => navigate("/")}
          href="/"
          aria-label="raven tattoo studio home"
        >
          <img
            className="w-[50px]"
            src="assets/logo_raven.webp"
            alt="raven tattoo logo"
          ></img>
        </a>

        <div className="hidden md:flex text-naranja font-lato">
          <ul className="hidden md:flex">
            <li className="pr-4 relative group">
              <a
                onClick={() => navigate("/#artistas")}
                className="hover:text-blanco transition-all duration-700 cursor-pointer"
                aria-label="artistas raven tattoo pereira"
              >
                ARTISTAS
              </a>
            </li>
            <li className="pr-4 relative group">
              <a
                onClick={() => navigate("/joyeria_raven")}
                className="hover:text-blanco transition-all duration-700 cursor-pointer"
                aria-label="contacto raven tattoo pereira"
              >
                JOYERIA
              </a>
            </li>
            <li className="pr-4 relative group">
              <a
                className="hover:text-blanco transition-all duration-700"
                href="/#"
                aria-label="agenda raven tattoo pereira"
              >
                AGENDA
              </a>
            </li>
          </ul>
        </div>

        <div className="md:hidden ml-16 text-naranja" onClick={handleClick}>
          {!nav ? (
            <MenuIcon className="w-5" />
          ) : (
            <XIcon className="w-5 text-blanco" />
          )}
        </div>
      </div>
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute bg-black text-blanco text-center w-full h-screen px-8 py-12 rounded-b-xl font-lato"
        }
      >
        <li className="pr-4 relative group">
          <a
            onClick={() => navigate("/#artistas")}
            aria-label="artistas raven tattoo pereira"
          >
            ARTISTAS
          </a>
        </li>
        <li className="pr-4 relative group">
          <a  onClick={() => navigate("/joyeria_raven")} aria-label="contacto raven tattoo pereira">
            JOYERIA
          </a>
        </li>
        <li className="pr-4 relative group">
          <a href="/#" aria-label="agenda raven tattoo pereira">
            AGENDA
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;

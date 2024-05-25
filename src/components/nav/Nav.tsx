import { useState } from "react";
//Styles
import "./Nav.scss";

//Assets
import logo from "../../assets/imgs/favicon.png";
import navMenu from "../../assets/icons/navMenu-icon.svg";
import closeNavMenu from "../../assets/icons/closeNavMenu-icon.svg";
import { Link } from "react-router-dom";

export const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNavVisibility = () => {
    if (window.innerWidth > 760) return;

    setNavOpen(!navOpen);
  };

  return (
    <header>
      <nav>
        <img id="logo" src={logo} alt="Lagoinha" />
        <button type="button" id="navMenu" onClick={toggleNavVisibility}>
          <img src={navMenu} alt="Close" />
        </button>
        <div id="navLinks" className={navOpen ? "nav-open" : ""}>
          <button id="closeNavMenu" onClick={toggleNavVisibility}>
            <img src={closeNavMenu} alt="Close" />
          </button>
          <Link to="/" onClick={toggleNavVisibility}>
            Início
          </Link>
          <Link to="/about" onClick={toggleNavVisibility}>
            Quem somos
          </Link>
          <Link to="/cults" onClick={toggleNavVisibility}>
            Cultos
          </Link>
          <Link to="/gcs" onClick={toggleNavVisibility}>
            GC's
          </Link>
          <Link to="/tithes" onClick={toggleNavVisibility}>
            Dízimos e Ofertas
          </Link>
          <Link to="/courses" onClick={toggleNavVisibility}>
            Cursos
          </Link>
        </div>
      </nav>
    </header>
  );
};

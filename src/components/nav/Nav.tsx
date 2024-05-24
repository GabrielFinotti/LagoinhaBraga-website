import { useState } from "react";
//Styles
import "./Nav.scss";

//Assets
import logo from "../../assets/imgs/favicon.png";
import navMenu from "../../assets/icons/navMenu-icon.svg";
import closeNavMenu from "../../assets/icons/closeNavMenu-icon.svg";

export const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNavVisibility = () => {
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
          <a href="/">Início</a>
          <a href="/">Quem somos</a>
          <a href="/">Cultos</a>
          <a href="/">GC's</a>
          <a href="/">Dízimos e Ofertas</a>
          <a href="/">Cursos</a>
        </div>
      </nav>
    </header>
  );
};

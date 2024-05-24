//Styles
import "./Footer.scss";

//Assets
import instagram from "../../assets/icons/instagram-icon.svg";
import facebook from "../../assets/icons/facebook-icon.svg";
import whatsapp from "../../assets/icons/whatsapp-icon.svg";
import youtube from "../../assets/icons/youtube-icon.svg";

export const Footer = () => {
  return (
    <footer>
      <div>
        <a
          href="https://www.instagram.com/lagoinhabraga/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
          <img src={instagram} alt="Instagram" />
        </a>
        <a
          href="https://www.facebook.com/IgrejaBatistaLagoinhaBraga/"
          target="_blank"
          rel="noreferrer"
        >
          Facebook
          <img src={facebook} alt="Facebook" />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=+351916787651&text=Ol%C3%A1,%20!%20Gostaria%20de%20de%20uma%20informa%C3%A7%C3%A3o%20:"
          target="_blank"
          rel="noreferrer"
        >
          Whatsapp
          <img src={whatsapp} alt="Whatsapp" />
        </a>
        <a
          href="https://www.youtube.com/@LagoinhaBraga"
          target="_blank"
          rel="noreferrer"
        >
          YouTube
          <img src={youtube} alt="YouTube" />
        </a>
      </div>
      <p>Todos os direitos reservados &copy;2024</p>
    </footer>
  );
};

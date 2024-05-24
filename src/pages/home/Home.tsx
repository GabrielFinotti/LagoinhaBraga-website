//Styles
import "./Home.scss";

//Assets
import presentationVideo from "../../assets/videos/presentationVideo.mp4";
import image1 from "../../assets/imgs/image1 .png";
import image2 from "../../assets/imgs/image2.png";
import image3 from "../../assets/imgs/image3.png";

export const Home = () => {
  return (
    <main id="home">
      <section id="homeVideo">
        <video src={presentationVideo} autoPlay muted playsInline loop></video>
      </section>
      <section className="presentation-cards">
        <div className="text">
          <h1>
            7 anos <br /> lagoinha braga
          </h1>
          <p>
            Prepare-se! Um ajuntamento de milhares de pessoas e convidadoes
            incríveis com um só objetivo: Adorar a Deus! <br />
            Será um tempo sobrenatural e você não pode ficar de fora dessa
            atmosfera de céu aberto que acontecerá no aniversário da nossa
            igreja Lagoinha Braga, dia 06 de Julho no complexo do Estádio do
            Braga.
          </p>
        </div>
        <img src={image1} alt="Imagem de Apresentação" />
      </section>
      <section className="presentation-cards">
        <div className="text">
          <h1>gc</h1>
          <p>
            A Lagoinha é uma igreja local focada na importância de cuidar com
            muito zelo de cada pessoa que se alimenta da Palavra de Deus em
            nossos cultos.
          </p>
        </div>
        <img src={image3} alt="Imagem de Apresentação" />
      </section>
      <section className="presentation-cards">
        <div className="text">
          <h1>Nossos cultos</h1>
          <p>
            Acompanhe nossos cultos, e prepare-se para ser transformado pela
            mensagem da Cruz. Acreditamos que servir a Deus e amar pessoas é a
            melhor forma de cumprir o propósito pelo qual fomos criados.
          </p>
        </div>
        <img src={image2} alt="Imagem de Apresentação" />
      </section>
    </main>
  );
};

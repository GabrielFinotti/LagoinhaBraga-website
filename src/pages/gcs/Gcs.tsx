//Style
import "./Gcs.scss";

//Assets
import map from "../../assets/icons/map-icon.svg";

export const Gcs = () => {
  return (
    <main id="gcs">
      <section id="headerGcs">
        <h1>GC</h1>
      </section>
      <section id="gcsGroup">
        <div className="gcs-cards">
          <h3>GC de Homens - Sexta</h3>
          <div className="info-cards">
            <p className="time-gcs">
              Quinta Feira às
              <time dateTime="20:00">20:00h</time>
            </p>
            <p className="address">
              <address>
                Rua Carlos Teixeira 19, 1° Direito
                <br />
                São Lazaro - Braga
              </address>
              <a
                href="https://maps.app.goo.gl/ijstvDj7555x8jpt8"
                target="_blank"
                rel="noreferrer"
              >
                Visualize
                <img src={map} alt="Mapa" />
              </a>
            </p>
          </div>
          <a href="tel:963625092" className="info-tel">
            Mais Informações
          </a>
        </div>
        <div className="gcs-cards">
          <h3>GC de Homens - Terça</h3>
          <div className="info-cards">
            <p className="time-gcs">
              Terça Feira às
              <time dateTime="20:00">20:00h</time>
            </p>
            <p className="address">
              <address>
                Rua Padre Antonio Vieira 122, 6° Esquerdo Frente
                <br />
                São Victor - Braga
              </address>
              <a
                href="https://maps.app.goo.gl/QSe2qRFEbtFWwAnq5"
                target="_blank"
                rel="noreferrer"
              >
                Visualize
                <img src={map} alt="Mapa" />
              </a>
            </p>
          </div>
          <a href="tel:932356292" className="info-tel">
            Mais Informações
          </a>
        </div>
        <div className="gcs-cards">
          <h3>GC de Família - São Vicente 1</h3>
          <div className="info-cards">
            <p className="time-gcs">
              Terça Feira às
              <time dateTime="20:00">20:00h</time>
            </p>
            <p className="address">
              <address>
                Praça das Fontainhas 11, 6° Direito
                <br />
                São Vicente - Braga
              </address>
              <a
                href="https://maps.app.goo.gl/P2ziGk7JiswFJFar7"
                target="_blank"
                rel="noreferrer"
              >
                Visualize
                <img src={map} alt="Mapa" />
              </a>
            </p>
          </div>
          <a href="tel:937819553" className="info-tel">
            Mais Informações
          </a>
        </div>
        <div className="gcs-cards">
          <h3>GC de Família - São Lázaro</h3>
          <div className="info-cards">
            <p className="time-gcs">
              Quinta Feira às
              <time dateTime="19:30">19:30h</time>
            </p>
            <p className="address">
              <address>
                Rua Almeida Garret 51, 1° Direito
                <br />
                São Lazaro - Braga
              </address>
              <a
                href="https://maps.app.goo.gl/2veC1xX3a4V1o9ND8"
                target="_blank"
                rel="noreferrer"
              >
                Visualize
                <img src={map} alt="Mapa" />
              </a>
            </p>
          </div>
          <a href="tel:924243033" className="info-tel">
            Mais Informações
          </a>
        </div>
        <div className="gcs-cards">
          <h3>GC de Família - Ruilhe</h3>
          <div className="info-cards">
            <p className="time-gcs">
              Sábado às
              <time dateTime="19:30">19:30h</time>
            </p>
            <p className="address">
              <address>
                Rua de Mourens 42, 1° Direito
                <br />
                Ruilhe - Braga
              </address>
              <a
                href="https://maps.app.goo.gl/ABQQdZbPzXHDhUxA7"
                target="_blank"
                rel="noreferrer"
              >
                Visualize
                <img src={map} alt="Mapa" />
              </a>
            </p>
          </div>
          <a href="tel:966037562" className="info-tel">
            Mais Informações
          </a>
        </div>
        <div className="gcs-cards">
          <h3>GC de Família - Parretas</h3>
          <div className="info-cards">
            <p className="time-gcs">
              Quinta Feira às
              <time dateTime="19:30">19:30h</time>
            </p>
            <p className="address">
              <address>
                Rua Dr. Cónego Manuel Faria 77
                <br />
                Maximinus - Braga
              </address>
              <a
                href="https://maps.app.goo.gl/hBK8RTdf6DigpeGE6"
                target="_blank"
                rel="noreferrer"
              >
                Visualize
                <img src={map} alt="Mapa" />
              </a>
            </p>
          </div>
          <a href="tel:963625092" className="info-tel">
            Mais Informações
          </a>
        </div>
        <div className="gcs-cards">
          <h3>GC de Família - Fujacal</h3>
          <div className="info-cards">
            <p className="time-gcs">
              Terça feira às
              <time dateTime="20:30">20:30h</time>
            </p>
            <p className="address">
              <address>
                Rua Monsenhor Airosa 56, 3° andar
                <br />
                Fujacal - Braga
              </address>
              <a
                href="https://maps.app.goo.gl/Enm9hYjGPUS4ak598"
                target="_blank"
                rel="noreferrer"
              >
                Visualize
                <img src={map} alt="Mapa" />
              </a>
            </p>
          </div>
          <a href="tel:915352958" className="info-tel">
            Mais Informações
          </a>
        </div>
        <div className="gcs-cards">
          <h3>GC de Família - Centro 2</h3>
          <div className="info-cards">
            <p className="time-gcs">
              Sábado às
              <time dateTime="17:00">17:00h</time>
            </p>
            <p className="address">
              <address>
                Avenida Liberdade 291, R/C Direito
                <br />
                Centro - Braga
              </address>
              <a
                href="https://maps.app.goo.gl/UmMr9rUYiPefwL6VA"
                target="_blank"
                rel="noreferrer"
              >
                Visualize
                <img src={map} alt="Mapa" />
              </a>
            </p>
          </div>
          <a href="tel:927409147" className="info-tel">
            Mais Informações
          </a>
        </div>
        <div className="gcs-cards">
          <h3>GC de Família - Centro 1</h3>
          <div className="info-cards">
            <p className="time-gcs">
              Quarta Feira às
              <time dateTime="19:30">19:30h</time>
            </p>
            <p className="address">
              <address>
                Rua de Diu 44
                <br />
                Cave - Braga
              </address>
              <a
                href="https://maps.app.goo.gl/NRPf7C9TkwaG4rh4A"
                target="_blank"
                rel="noreferrer"
              >
                Visualize
                <img src={map} alt="Mapa" />
              </a>
            </p>
          </div>
          <a href="tel:933307160" className="info-tel">
            Mais Informações
          </a>
        </div>
        <div className="gcs-cards">
          <h3>GC de Casais</h3>
          <div className="info-cards">
            <p className="time-gcs">
              Segunda feira às
              <time dateTime="20:00">20:00h</time>
            </p>
            <p className="address">
              <address>
                Avenida Antonio Palha 61, 2° Direito Frente
                <br />
                Lamaçães - Braga
              </address>
              <a
                href="https://maps.app.goo.gl/ZQzeRD6WJveU2S848"
                target="_blank"
                rel="noreferrer"
              >
                Visualize
                <img src={map} alt="Mapa" />
              </a>
            </p>
          </div>
          <a href="tel:910676103" className="info-tel">
            Mais Informações
          </a>
        </div>
      </section>
    </main>
  );
};

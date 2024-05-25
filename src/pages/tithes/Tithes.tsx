//Styles
import "./Tithes.scss";

//Assets
import iban from "../../assets/imgs/iban-icon.png";
import mbWay from "../../assets/imgs/mbWay-icon.png";
import pix from "../../assets/imgs/pix-icon.png";

export const Tithes = () => {
  return (
    <main id="tithes">
      <section id="headerTithes">
        <h1>Dízimos e Ofertas</h1>
        <p>Faça sua contribuição através de uma das nossas contas bancárias.</p>
      </section>
      <section id="payment">
        <div>
          <img src={iban} alt="IBAN" />
          <p>
            <span>IBAN:</span> PT50 0010 0000 6119 3300 0013 9
          </p>
        </div>
        <div>
          <img src={mbWay} alt="MB Way" />
          <p>
            <span>MB Way:</span> 920 127 041
          </p>
        </div>
        <div>
          <img src={pix} alt="PIX" />
          <p>
            <span>PIX:</span> lagoinhabraga@gmail.com
          </p>
        </div>
      </section>
      <section id="text">
        <p>
          "Cada um dê conforme determinou em seu coração, não com pesar ou por
          obrigação, pois Deus ama quem dá com alegria."
          <br />2 Coríntios 9:7
        </p>
      </section>
    </main>
  );
};

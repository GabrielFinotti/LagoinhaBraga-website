//Styles
import "./About.scss";

//Assets
import image2 from "../../assets/imgs/image2.png";

export const About = () => {
  return (
    <main id="about">
      <div className="container">
        <h1>Quem Somos</h1>
        <img src={image2} alt="Imagem de apresentação" />
        <p>
          Obediência à grande comissão é a única atitude que Deus requer para
          nos usar. Lagoinha Braga foi uma conexão de obediências;
          <br />
          De um lado, uma família seguiu o sonho que Deus os havia dado e pediu
          a abertura da Lagoinha na cidade; De outro lado, uma missionária
          partiu para cumprir o chamado e, com a ajuda de Deus, tornar realidade
          esta implantação Nestes 7 Anos temos participado do mover de Deus em
          Portugal.
          <br />
          E assim... a Lagoinha Braga multiplicou e, pela graça de Deus chegamos
          em outros lugares como em Guimarães, Barcelos, Famalicão, Póvoa de
          Lanhoso, Vila Verde e Nuremberg, na Alemanha. Não vamos parar po aí,
          iremos aonde Deus quiser nos levar, em todo Portugal, de norte a
          sul,de leste a oeste.
          <br />
          "O povo que andava nas trevas viu uma grande luz; sobre os que
          habitavam na terra da sombrada morte resplandeceu a luz" (Is 9:2) A
          glória de Deus replandecerá em Portugal para as Nações! PRA. ANA PAULA
          MANZO
        </p>
      </div>
    </main>
  );
};

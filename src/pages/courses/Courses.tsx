//Styles
import "./Courses.scss";

//Assets
import imageCourse from "../../assets/imgs/curso.png";

export const Courses = () => {
  return (
    <main id="courses">
      <div className="container">
        <h1>Cursos</h1>
        <div id="contentCourse">
          <img src={imageCourse} alt="Imagem de Curos" />
          <div id="contentText">
            <h2>Seminário Carisma</h2>
            <p>
              Mais do que um seminário bíblico, o Carisma é uma escola que
              através da Palavra revelada e do Espírito Santo traz um ensino
              prático e vivo, empoderando você a viver o propósito pelo qual
              existe!
              <span>Duração:</span>1 ano
              <span>Turmas:</span>
              Sábados | 9h às 18:00h
            </p>
            <a href="https://linktr.ee/carisma.braga?utm_source=linktree_profile_share&ltsid=dc42037f-4fa4-43bd-b72d-0f738a1103e5">
              Saiba mais
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

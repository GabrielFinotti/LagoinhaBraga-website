//Styles
import "./App.scss";

//Components
import { Footer } from "./components/footer/Footer";
import { Nav } from "./components/nav/Nav";
import { About } from "./pages/about/About";
import { Courses } from "./pages/courses/Courses";
import { Cults } from "./pages/cults/Cults";
import { Gcs } from "./pages/gcs/Gcs";
import { Home } from "./pages/home/Home";
import { Tithes } from "./pages/tithes/Tithes";

export const App = () => {
  return (
    <>
      <Nav></Nav>
      {/* <Home></Home> */}
      {/* <About></About> */}
      {/* <Cults></Cults> */}
      {/* <Courses></Courses> */}
      {/* <Tithes></Tithes> */}
      <Gcs></Gcs>
      <Footer></Footer>
    </>
  );
};

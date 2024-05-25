import "./App.scss";
import { Footer } from "./components/footer/Footer";
import { Nav } from "./components/nav/Nav";
import { About } from "./pages/about/About";
import { Cults } from "./pages/cults/Cults";
import { Home } from "./pages/home/Home";

export const App = () => {
  return (
    <>
      <Nav></Nav>
      {/* <Home></Home> */}
      {/* <About></About> */}
      <Cults></Cults>
      <Footer></Footer>
    </>
  );
};

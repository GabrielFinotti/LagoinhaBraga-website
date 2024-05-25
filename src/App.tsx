//Styles
import { BrowserRouter } from "react-router-dom";
import "./App.scss";

//Components
import { Footer } from "./components/footer/Footer";
import { Nav } from "./components/nav/Nav";
import { Routers } from "./routes/Routers";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav></Nav>
        <Routers></Routers>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
};

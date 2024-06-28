//Styles
import { BrowserRouter } from "react-router-dom";
import "./App.scss";

//Components
import { Footer } from "./components/footer/Footer";
import { Nav } from "./components/nav/Nav";
import { Routers } from "./routes/Routers";
import { TopGo } from "./components/topGo/TopGo";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav></Nav>
        <Routers></Routers>
        <TopGo></TopGo>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
};

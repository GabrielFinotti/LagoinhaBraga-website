import "./App.scss";
import { Nav } from "./components/nav/Nav";
import { Home } from "./pages/home/Home";

export const App = () => {
  return (
    <>
      <Nav></Nav>
      <Home></Home>
    </>
  );
};

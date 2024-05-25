import { Route, Routes } from "react-router-dom";

//Pages
import { Home } from "../pages/home/Home";
import { About } from "../pages/about/About";
import { Cults } from "../pages/cults/Cults";
import { Gcs } from "../pages/gcs/Gcs";
import { Tithes } from "../pages/tithes/Tithes";
import { Courses } from "../pages/courses/Courses";

export const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/cults" element={<Cults></Cults>}></Route>
        <Route path="/gcs" element={<Gcs></Gcs>}></Route>
        <Route path="/tithes" element={<Tithes></Tithes>}></Route>
        <Route path="/courses" element={<Courses></Courses>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="*" element={<Home></Home>}></Route>
      </Routes>
    </>
  );
};

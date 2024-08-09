import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "../pages/Contact";
import Customers from "../pages/Customers";
import Home from "../pages/Home";
import PrivacyPolicies from "../pages/PrivacyPolicies";
import Uniforms from "../pages/Uniforms";
import { pathRoutes } from "./PathRoutes";
import AboutUs from "../pages/AboutUs";

function WebRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={pathRoutes.home} Component={Home}></Route>
        <Route path={pathRoutes.uniforms} Component={Uniforms}></Route>
        <Route path={pathRoutes.customers} Component={Customers}></Route>
        <Route path={pathRoutes.contact} Component={Contact}></Route>
        <Route path={pathRoutes.privacy} Component={PrivacyPolicies}></Route>
        <Route path={pathRoutes.aboutUs} Component={AboutUs}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default WebRoutes;
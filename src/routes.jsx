import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Projetos from "./pages/Projetos";
import Contatos from "./pages/Contatos";
import Page404 from "./pages/Page404";
import PageBase from "./pages/PageBase";
import { HiHome } from "react-icons/hi2";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageBase />}>
          <Route index element={<Home />}></Route>
          <Route path="/sobre" element={<Sobre />}></Route>
          <Route path="/projetos" element={<Projetos />}></Route>
          <Route path="/contatos" element={<Contatos />}></Route>
          <Route
            path="https://matheusoliveira0.github.io/matheus-portifolio/"
            element={<HiHome />}
          ></Route>
          <Route
            path="https://matheusoliveira0.github.io/"
            element={<HiHome />}
          ></Route>
          <Route path="/matheus-portifolio" element={<Home />}></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

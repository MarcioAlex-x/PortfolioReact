import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Sobre from "./pages/Sobre/Sobre";
import Contato from "./pages/Contato/Contato";
import Projetos from "./pages/Projetos/Projetos";
import Page404 from "./pages/Page404/Page404";
import Base from "./pages/Base/Base.";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Base /> }>
          <Route index element={<Home />} />    
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contatos" element={<Contato />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="*" element={<Page404 />} />
        </Route>
       
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;

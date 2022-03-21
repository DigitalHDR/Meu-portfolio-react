import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Skill from "./pages/Skill";
import Projetos from "./pages/Projetos";
import Curriculo from "./pages/Curriculo";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/skill" element={<Skill />} />
      <Route path="/projetos" element={<Projetos />} />
      <Route path="/curriculo" element={<Curriculo />} />
    </Routes>
  )
}
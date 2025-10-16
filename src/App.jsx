import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Componentes/Layout";
import Home from "./paginas/Home";
import Pacientes from "./paginas/Pacientes";
import Examenes from "./paginas/Examenes";
import Remisiones from "./paginas/Remisiones";
import Citas from "./paginas/Citas";
import Login from "./paginas/Login";
import Registro from "./paginas/Registro";
import Logout from "./paginas/Logout";
import "./App.css";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pacientes" element={<Pacientes />} />
          <Route path="/examenes" element={<Examenes />} />
          <Route path="/remisiones" element={<Remisiones />} />
          <Route path="/citas" element={<Citas />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

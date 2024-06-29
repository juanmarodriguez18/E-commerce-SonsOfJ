import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import GrillaManufacturados from './components/E-commerce/GrillaManufacturados';
import Carrito from "./components/Carrito/Carrito";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import RegisterCliente from "./components/ControlAcceso/RegisterCliente";
import { RutaPrivada } from "./components/ControlAcceso/RutaPrivada";



function App() {
  //Rutas de nuestra aplicacion 
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/menu" element={<GrillaManufacturados />} />
        <Route path="/registerCliente" element={<RegisterCliente />} />

        <Route path="/carrito" element={<RutaPrivada><Carrito /></RutaPrivada>} />
        

      </Routes>
    </BrowserRouter>
  )
}

export default App

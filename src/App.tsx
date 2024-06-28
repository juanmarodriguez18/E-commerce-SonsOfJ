import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import GrillaManufacturados from './components/E-commerce/GrillaManufacturados';
import Carrito from "./components/Carrito/Carrito";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import LoginCliente from "./components/ControlAcceso/LoginCliente";
import RegisterCliente from "./components/ControlAcceso/RegisterCliente";



function App() {
  //Rutas de nuestra aplicacion 
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/menu" element={<GrillaManufacturados />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/loginCliente" element={<LoginCliente />} />
        <Route path="/registerCliente" element={<RegisterCliente />} />
        

      </Routes>
    </BrowserRouter>
  )
}

export default App

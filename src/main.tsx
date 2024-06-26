import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { CarritoContextProvider } from './components/Carrito/CarritoContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CarritoContextProvider>
      <App />
    </CarritoContextProvider>
  </React.StrictMode>,
)

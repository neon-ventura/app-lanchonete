import Home from "./Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Pedir from "./Pedir"
import Pedidos from "./Pedidos"

function App() {

  return (
    <>
      <h1>Lanchonete Neon</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pedir/:id" element={<Pedir />} />
          <Route path="/verpedidos" element={<Pedidos />}/>
        </Routes >
      </BrowserRouter>
    </>
  )
}

export default App

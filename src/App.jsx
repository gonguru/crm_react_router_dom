import { Route, Routes, BrowserRouter } from "react-router-dom"
import Layout from "./layout/Layout"
import Inicio from "./pages/Inicio"
import EditarCliente from "./pages/EditarCliente"
import NuevoCliente from "./pages/NuevoCliente"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/clientes' element={<Layout/>}>
          <Route index element={<Inicio/>}/>
          <Route path='nuevo' element={<NuevoCliente/>}/>
          <Route path='editar/:id' element={<EditarCliente/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

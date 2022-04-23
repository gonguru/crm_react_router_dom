import { Outlet, Link, useLocation } from "react-router-dom"

const Layout = () => {

  const location = useLocation()
  const currentURL = location.pathname

  return (
    <div className="md:flex md:h-screen">
      <div className="md:w-1/4 bg-blue-900 px-5 py-10">
        <h2 className="text-4xl font-bold text-center text-white">
          CRM - Clientes
        </h2>
        <nav className="mt-10 flex flex-col text-left text-xl">
          <Link className={currentURL === '/clientes' ? 'text-gray-500' : 'text-white'} to="/clientes">Clientes</Link>
          <Link className={currentURL === '/clientes/nuevo' ? 'text-gray-500' : 'text-white'} to="/clientes/nuevo">Nuevo Cliente</Link>
        </nav>
      </div>

      <div className="md:w-3/4 p-10 md:h-screen overflow-scroll">
      <Outlet/>
      </div>
    </div>
  )
}

export default Layout
import { useEffect, useState } from "react";
import Cliente from "../components/Cliente";

const Inicio = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const obtenerClientesAPI = async () => {
      const url = "http://localhost:4000/clientes";
      const respuesta = await fetch(url);
      const clientes = await respuesta.json();

      setClientes(clientes);
    };
    obtenerClientesAPI();
  }, []);

  return (
    <>
      <h1 className="font-bold text-4xl text-blue-900">Clientes</h1>
      <p className="mt-3">Administra tus clientes</p>
      <table className="w-full mt-5 table-auto shadow bg-white">
        <thead>
          <tr className="bg-blue-700 text-white font-bold text-center">
            <td className="p-2">Nombre</td>
            <td className="p-2">Contacto</td>
            <td className="p-2">Empresa</td>
            <td className="p-2">Acciones</td>
          </tr>
        </thead>
        <tbody>
          {
              clientes.map((cliente) => (
                <Cliente cliente={cliente} key={cliente.id}/>                  
              ))
          }
        </tbody>
      </table>
    </>
  );
};

export default Inicio;

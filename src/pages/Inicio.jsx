import { useEffect, useState } from "react";
import Cliente from "../components/Cliente";
import ModalCliente from "../components/ModalCliente";

const Inicio = () => {
  const [clientes, setClientes] = useState([]);
  const [modalIsVisible, setmodalIsVisible] = useState(false);
  const [ cliente, setCliente ] = useState({})

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
      { modalIsVisible && <ModalCliente cliente={cliente} setmodalIsVisible={setmodalIsVisible}/>}
      <h1 className="font-bold text-4xl text-blue-900">Clientes</h1>
      <p className="mt-3">Administra tus clientes</p>
      <table className="w-full mt-5 table-auto shadow bg-white text-center">
        <thead>
          <tr className="bg-blue-700 text-white font-bold text-center">
            <td className="p-2">Nombre</td>
            <td className="p-2">Contacto</td>
            <td className="p-2" colSpan="2">
              Empresa
            </td>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <Cliente
              setCliente={setCliente}
              setmodalIsVisible={setmodalIsVisible}
              clientes={clientes}
              setClientes={setClientes}
              cliente={cliente}
              key={cliente.id}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Inicio;

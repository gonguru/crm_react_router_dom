import { useEffect, useState } from "react";
import Cliente from "../components/Cliente";
import ModalCliente from "../components/ModalCliente";
import Spinner from '../components/Spinner'

const Inicio = () => {
  const [clientes, setClientes] = useState([]);
  const [modalIsVisible, setmodalIsVisible] = useState(false);
  const [cliente, setCliente] = useState({});
  const [ loading, setLoading ] = useState(false)

  useEffect(() => {
    setLoading(true)
    const obtenerClientesAPI = async () => {
      const url = import.meta.env.VITE_API_URL;
      const respuesta = await fetch(url);
      const clientes = await respuesta.json();

      setClientes(clientes);
      setLoading(false)
    };
    obtenerClientesAPI();
  }, []);

  return (
    <>
      {modalIsVisible && (
        <ModalCliente cliente={cliente} setmodalIsVisible={setmodalIsVisible} />
      )}
      <h1 className="font-bold text-4xl text-blue-900">Clientes</h1>
      <p className="mt-3">Administra tus clientes</p>
      { loading ? <Spinner /> : (
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
      )}
    </>
  );
};

export default Inicio;

import { useNavigate } from "react-router-dom";
import { useState }  from 'react'

const Cliente = ({ setCliente, clientes, setClientes, cliente, setmodalIsVisible }) => {
  const navigate = useNavigate()
  const { nombre, telefono, empresa, email, notas, id } = cliente;

  const handleClick= async e => {
    const classes = e.target.classList;
    if( classes.contains('u-delete')) {
      try {
        const eliminar = confirm('¿Deseas eliminar el cliente?')
        if(eliminar) {
          const url = `http://localhost:4000/clientes/${id}`
          const response = await fetch(url, {
            method: 'DELETE'
          })
          await response.json()
          const removedClient = clientes.filter(client => client.id !== id)
          setClientes(removedClient)
        }
      } catch (error) {
        console.log(error)
      }
    } else {
      setmodalIsVisible(true)
      setCliente(cliente)
    }
  }

  return (
    <tr
      onClick={(e) => {
        handleClick(e);
      }}
      className="hover:bg-gray-200 cursor-pointer border-b"
    >
      <td className="p-3 text-md">{nombre}</td>
      <td>
        <p className="text-gray-800">
          Email: <span>{email}</span>
        </p>
        <p className="text-gray-800">
          Tel: <span>{telefono}</span>
        </p>
      </td>
      <td>{empresa}</td>
      <td className="flex gap-1 flex-col m-1 text-lg mx-center">
        <button
          onClick={() => navigate(`/clientes/editar/${id}`)}
          className="w-full rounded-sm bg-blue-600 text-white u-edit"
          type="button"
        >
          <i className="lni lni-pencil-alt u-edit m-1"></i>
        </button>
        <button
          className="rounded-sm bg-red-500 text-white w-full u-delete"
          type="button"
        >
          <i className="lni lni-trash-can u-delete m-1"></i>
        </button>
      </td>
    </tr>
  );
};

export default Cliente;

const Cliente = ({ cliente }) => {
  const { nombre, telefono, empresa, email, notas, id } = cliente;

  const showClient = async id => {
    const url = `http://localhost:4000/clientes/${id}`
    const response = await fetch(url)
    const client = await response.json()

    console.log(client)
  }

  return (
    <tr 
        onClick={() => {showClient(id)}}
        className="hover:bg-gray-200 cursor-pointer">
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
      <td className="flex justify-center flex-col gap-1 p-1">
        <button className="rounded-sm bg-blue-600 text-white p-1 block w-full" type="button">Editar</button>
        <button className="rounded-sm bg-red-500 text-white p-1 block w-full" type="button">Eliminar</button>
      </td>
    </tr>
  );
};

export default Cliente;

import { useNavigate } from "react-router-dom";

const VerCliente = ({cliente, setmodalIsVisible}) => {
  
  const navigate = useNavigate()
  const { nombre, telefono, email, empresa, notas, id } = cliente;

  return (
    <div 
      className="fixed top-0 left-0 flex justify-center overflow-y-scroll items-center w-full h-screen bg-black bg-opacity-80">
      <div className="bg-slate-300 w-3/4 md:w-3/4 lg:w-1/4 xl:w-2/4 rounded-xl m-auto">
        <span 
          onClick={() => {setmodalIsVisible(false)}}
          className="float-right text-white text-center leading-7 cursor-pointer bg-blue-900 font-thin text-3xl rounded-full m-1 w-7 h-7">&times;</span>
        <h4 className=" text-center font-bold text-blue-900 text-2xl pt-5">
          Cliente
        </h4>
        <div className="mt-2  p-3 text-center">
          <div className="mb-4">
            <label className="text-gray-800" htmlFor="nombre">
              Nombre
            </label>
            <input
              value={nombre}
              readOnly
              id="nombre"
              name="nombre"
              type="text"
              className="block w-full p-3 bg-gray-50 cursor-not-allowed rounded-md"
              placeholder="Nombre del cliente"
            />
          </div>
          <div className="mb-4">
            <label className="text-gray-800" htmlFor="empresa">
              Empresa
            </label>
            <input
              value={empresa}
              readOnly
              id="empresa"
              name="empresa"
              type="text"
              className="block w-full p-3 bg-gray-50 cursor-not-allowed rounded-md"
              placeholder="Empresa Ej Alfombras el cochinito"
            />
          </div>
          <div className="mb-4">
            <label className="text-gray-800" htmlFor="email">
              Email
            </label>
            <input
              value={email}
              readOnly
              id="Email"
              name="email"
              type="email"
              className="block w-full p-3 bg-gray-50 cursor-not-allowed rounded-md"
              placeholder="Email del cliente"
            />
          </div>
          <div className="mb-4">
            <label className="text-gray-800" htmlFor="telefono">
              Telefono
            </label>
            <input
              value={telefono}
              readOnly
              id="telefono"
              type="tel"
              name="telefono"
              className="block w-full p-3 bg-gray-50 cursor-not-allowed rounded-md"
              placeholder="Teléfono"
            />
          </div>
          <div className="mb-4">
            <label className="text-gray-800" htmlFor="notas">
              Notas
            </label>
            <textarea
              value={notas}
              readOnly
              id="notas"
              name="notas"
              className="block w-full p-3 bg-gray-50 cursor-not-allowed rounded-md h-40"
            />
          </div>
          <button 
            onClick={() => navigate(`editar/${id}`)}
            className="bg-blue-900 text-white p-3 rounded-md text-xl w-full">
            Editar
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerCliente;

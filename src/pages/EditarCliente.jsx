import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Formulario from '../components/Formulario'
import Spinner from '../components/Spinner'

const EditarCliente = () => {

  const { id } = useParams()
  const [ client, setClient ] = useState({})
  const [ loading, setLoading ] = useState(false)

  useEffect(() => {
    const getClientAPI = async () => {
      setLoading(true)
      try {
        const url = `http://localhost:4000/clientes/${id}`
        const response = await fetch(url)
        const client = await response.json()
        setClient(client)
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    getClientAPI()
  }, [])

  return (
    <>
      <h1 className="font-bold text-4xl text-blue-900">Edición Cliente</h1>
      <p className="mt-3">
        Utiliza el formulario para editar los datos del cliente
      </p>
      {
        loading ? <Spinner /> : 
          Object.keys(client).length > 0 ? 
            <Formulario cliente={client}/> : 
            <p className='text-blue-900 text-center m-20 text-3xl'>No se ha encontrado el cliente</p>
      }
    </>
  )
}

export default EditarCliente
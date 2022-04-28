import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Alert from "./Alert";
import * as Yup from "yup";

const Formulario = ({cliente}) => { 
  const navigate = useNavigate();

  const clientSchema = Yup.object().shape({
    nombre: Yup.string("Este campo no es válido").required(
      "Este campo es obligatorio"
    ),
    empresa: Yup.string("Este campo no es válido").required(
      "Este campo es obligatorio"
    ),
    email: Yup.string("Este campo no es válido")
      .email("Introduce un email válido")
      .required("Este campo no es válido"),
    telefono: Yup.number()
      .typeError("Sólo introduce números")
      .positive("Número no válido")
      .required("Este campo es obligatorio"),
    notas: Yup.string().required("Este campo es obligatorio"),
  });

  const handleSubmit = async (values) => {
    try {
      let response
      if (cliente.id) {
        const url = `${import.meta.env.VITE_API_URL}/${cliente.id}`
        response = await fetch(url, {
          method: 'PUT',
          body: JSON.stringify(values),
          headers: {
            'Content-Type':'application/json'
          }
        })
      } else {
        const url = import.meta.env.VITE_API_URL;
        response = await fetch(url, {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-type": "application/json",
          },
        });
        }
        await response.json()
        navigate('/clientes')
    } catch (error) {
      console.error(error);
    }
  };

  const saveClient = () => {

  }

  return (
    <div className="bg-white mt-10 px-5 py-10 rounded shadow-md md:w-3/4 mx-auto">
      <h1 className="font-bold text-center text-2xl">{cliente?.nombre ? 'Editando Cliente' : 'Registrar Cliente'}</h1>
      <Formik
        initialValues={{
          nombre: cliente?.nombre ?? '',
          empresa: cliente?.empresa ?? '',
          email: cliente?.email ?? '',
          telefono: cliente?.telefono ?? '',
          notas: cliente?.notas ?? '',
        }}
        enableReinitialize={true}
        onSubmit={async (values, { resetForm }) => {
          await handleSubmit(values);
          resetForm();
        }}
        validationSchema={clientSchema}
      >
        {() => (
          <Form className="mt-10">
            <div className="mb-4">
              <label className="text-gray-800" htmlFor="nombre">
                Nombre:
              </label>
              <ErrorMessage component={Alert} name="nombre" />
              <Field
                id="nombre"
                name="nombre"
                type="text"
                className="block w-full p-3 bg-gray-50"
                placeholder="Nombre del cliente"
              />
            </div>
            <div className="mb-4">
              <label className="text-gray-800" htmlFor="empresa">
                Empresa:
              </label>
              <ErrorMessage component={Alert} name="empresa" />
              <Field
                id="empresa"
                name="empresa"
                type="text"
                className="block w-full p-3 bg-gray-50"
                placeholder="Empresa Ej: Alfombras el cochinito"
              />
            </div>
            <div className="mb-4">
              <label className="text-gray-800" htmlFor="email">
                Email:
              </label>
              <ErrorMessage component={Alert} name="email" />
              <Field
                id="Email"
                name="email"
                type="email"
                className="block w-full p-3 bg-gray-50"
                placeholder="Email del cliente"
              />
            </div>
            <div className="mb-4">
              <label className="text-gray-800" htmlFor="telefono">
                Telefono:
              </label>
              <ErrorMessage component={Alert} name="telefono" />
              <Field
                id="telefono"
                type="tel"
                name="telefono"
                className="block w-full p-3 bg-gray-50"
                placeholder="Teléfono"
              />
            </div>
            <div className="mb-4">
              <label className="text-gray-800" htmlFor="notas">
                Notas:
              </label>
              <ErrorMessage component={Alert} name="notas" />
              <Field
                as="textarea"
                id="notas"
                name="notas"
                type="text"
                className="block w-full p-3 bg-gray-50 h-40"
                placeholder="Notas del cliente"
              />
            </div>
            <input
              type="submit"
              value={cliente?.nombre ? 'Terminar edición' : 'Guardar Cliente'}
              className="mt-5 bg-blue-900 font-bold text-2xl p-3 rounded-md w-full text-white"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

Formulario.defaultProps = {
  cliente: {}
}

export default Formulario;

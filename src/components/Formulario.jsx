import React from "react";
import { Formik, Form, Field } from "formik";

const Formulario = () => {

    const handleSubmit = values => {
        console.log(values)
    }

  return (
    <div className="bg-white mt-10 px-5 py-10 rounded shadow-md md:w-3/4 mx-auto">
      <h1 className="font-bold text-center text-2xl">Registrar Cliente</h1>
      <Formik
        initialValues={{
          nombre: "",
          empresa: '',
          email: '',
          telefono: '',
          notas: ''
        }}
        onSubmit={values => {
            handleSubmit(values)
        }}
      >
        {() => (
          <Form className="mt-10">
            <div className="mb-4">
              <label className="text-gray-800" htmlFor="nombre">
                Nombre:
              </label>
              <Field
                id="nombre"
                name="nombre"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Nombre del cliente"
              />
            </div>
            <div className="mb-4">
              <label className="text-gray-800" htmlFor="empresa">
                Empresa:
              </label>
              <Field
                id="empresa"
                name="empresa"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Empresa Ej: Alfombras el cochinito"
              />
            </div>
            <div className="mb-4">
              <label className="text-gray-800" htmlFor="email">
                Email:
              </label>
              <Field
                id="Email"
                name="email"
                type="email"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Email del cliente"
              />
            </div>
            <div className="mb-4">
              <label className="text-gray-800" htmlFor="telefono">
                Telefono:
              </label>
              <Field
                id="telefono"
                type="tel"
                name="telefono"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Teléfono"
              />
            </div>
            <div className="mb-4">
              <label className="text-gray-800" htmlFor="notas">
                Notas:
              </label>
              <Field
                as="textarea"
                id="notas"
                name="notas"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50 h-40"
                placeholder="Notas del cliente"
              />
              <input
                type="submit"
                value="Agregar cliente"
                className="mt-5 bg-blue-900 font-bold text-2xl p-3 rounded-md w-full text-white"
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Formulario;

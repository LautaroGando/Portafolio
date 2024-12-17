"use client";
import { Field, Form, Formik } from "formik";
import React from "react";
import { motion } from "motion/react";

export const FormContact: React.FC = () => {
  return (
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      validate={() => {}}
      onSubmit={() => {}}
    >
      {() => (
        <Form className="flex flex-col gap-3">
          <div className="container-input">
            <label htmlFor="name">Nombre:</label>
            <Field
              className="h-[40px] input"
              type="text"
              id="name"
              name="name"
            />
          </div>
          <div className="container-input">
            <label htmlFor="email">Correo electrónico:</label>
            <Field
              className="h-[40px] input"
              type="email"
              id="email"
              name="email"
            />
          </div>
          <div className="container-input">
            <label htmlFor="message">Mensaje:</label>
            <Field
              className="h-[120px] input"
              as="textarea"
              id="message"
              name="message"
            />
          </div>
          <motion.button
            whileTap={{
              scale: 0.9,
              backgroundColor: "#A435F0",
              color: "#FAFAFA",
            }}
            className="bg-backgroundSecondary h-[40px] mt-10 text-secondaryColor"
            type="submit"
          >
            ENVIAR
          </motion.button>
        </Form>
      )}
    </Formik>
  );
};

export default FormContact;

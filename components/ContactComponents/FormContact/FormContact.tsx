import { Hoverable } from "@/components/GeneralComponents/Hoverable/Hoverable";
import { formData } from "@/data/ContactComponents/FormData/form-data";
import {
  IFormData,
  IFormValuesData,
  IFormValuesOptionData,
} from "@/data/ContactComponents/FormData/types";
import { IFormPersonal, IFormTeam } from "@/interfaces/IForm";
import { useContactStore } from "@/store/ContactStore/useContactStore";
import clsx from "clsx";
import { Field, Form, Formik, FormikProps } from "formik";
import React from "react";
import { AnimatePresence, motion } from "motion/react";
import ButtonBack from "@/components/ui/ContactComponents/ButtonBack/ButtonBack";
import { validateFormPersonal, validateFormTeam } from "@/helpers/validateForm";
import { handleSubmitFormContact } from "@/utils/sendFormContact";

export const FormContact: React.FC = () => {
  const { form } = useContactStore();

  const formSelected = formData.find((f: IFormData) => f.id === form);

  return (
    <AnimatePresence mode="wait">
      {formSelected && (
        <motion.div
          key={formSelected.id}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
        >
          <Formik
            initialValues={formSelected.initialValues}
            validate={
              formSelected.id === "personal"
                ? validateFormPersonal
                : validateFormTeam
            }
            onSubmit={(values, { resetForm }) =>
              handleSubmitFormContact(values, formSelected.id, resetForm)
            }
          >
            {({ errors, touched }: FormikProps<IFormPersonal | IFormTeam>) => (
              <Form>
                <div className="flex flex-col items-center gap-8">
                  <ButtonBack />
                  <motion.h2
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-secondary font-medium sm:text-xl"
                  >
                    {formSelected.title}
                  </motion.h2>
                  {formSelected.formValues.map(
                    (value: IFormValuesData, i: number) => (
                      <motion.div
                        key={i}
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: i / 6 }}
                        className="relative"
                      >
                        <Field
                          as={
                            value.textarea
                              ? "textarea"
                              : value.select && "select"
                          }
                          className={clsx(
                            "w-[300px] max-w-[300px] scroll h-[50px] border-b border-secondary outline-none text-secondary px-3 transition-all duration-300 focus:bg-secondary/10 placeholder:text-secondary/50 sm:w-[400px] sm:max-w-[400px]",
                            value.textarea &&
                              "pt-3 min-h-[100px] max-h-[200px]",
                            value.select && "text-sm sm:text-base"
                          )}
                          type={value.type}
                          name={value.name}
                          id={value.name}
                          placeholder={value.placeholder}
                        >
                          {value.select && (
                            <optgroup className="bg-primary">
                              <option value="">Seleccione una razón:</option>
                              {value.options?.map(
                                (option: IFormValuesOptionData, i: number) => (
                                  <option key={i} value={option.value}>
                                    {option.label}
                                  </option>
                                )
                              )}
                            </optgroup>
                          )}
                        </Field>
                        <AnimatePresence mode="wait">
                          {touched[value.name as keyof typeof touched] &&
                            errors[value.name as keyof typeof errors] && (
                              <motion.p
                                key={`error-${value.name}`}
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -5 }}
                                transition={{ duration: 0.2 }}
                                className="input-error"
                              >
                                {errors[value.name as keyof typeof errors]}
                              </motion.p>
                            )}
                        </AnimatePresence>
                      </motion.div>
                    )
                  )}
                  <Hoverable>
                    {(isHovered) => (
                      <motion.button
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.4 }}
                        type="submit"
                        className={clsx(
                          "w-[155px] h-[40px] border-[2px] border-secondary transition-all duration-300 font-extra  relative after:content-[''] after:absolute after:bg-secondary after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:top-1/2 after:transition-all after:duration-500 after:z-10",
                          isHovered
                            ? "after:w-full after:h-full after:rounded-[0px]"
                            : "after:rounded-[100px] after:w-0 after:h-0"
                        )}
                      >
                        <span
                          className={clsx(
                            "relative z-20 flex w-full h-full items-center justify-center transition-all duration-300",
                            isHovered ? "text-primary" : "text-secondary"
                          )}
                        >
                          Enviar
                        </span>
                      </motion.button>
                    )}
                  </Hoverable>
                </div>
              </Form>
            )}
          </Formik>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FormContact;

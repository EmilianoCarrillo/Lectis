import styles from "./loginForm.module.scss";
import utils from "../styles/utils.module.css";
import React, {useEffect} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import ButtonLink from "./buttonLink";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("El correo no está escrito correctamente.")
    .required("El correo es obligatorio."),
  password: Yup.string().required("La contraseña es obligatoria."),
});

export default function LoginForm() {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={LoginSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
      }}
      validateOnMount
    >
      {({ isSubmitting, isValid }) => (
        <Form className={styles.wrapper}>
          <div className={styles.inputGroup}>
            <label className={utils.body_regular}>Apodo / Correo</label>
            <Field
              type="email"
              name="email"
              className={styles.field}
            />
            <ErrorMessage name="email" >
              { msg => <div className={`${utils.small_regular} ${styles.error}`}>{msg}</div> }
            </ErrorMessage>
          </div>
          <div className={styles.inputGroup}>
            <label className={utils.body_regular}>Contraseña</label>
            <Field
              type="password"
              name="password"
              className={styles.field}
            />
            <ErrorMessage name="password" >
              { msg => <div className={`${utils.small_regular} ${styles.error}`}>{msg}</div> }
            </ErrorMessage>
          </div>
          <button type="submit" className={!isValid && styles.disabled}>Entrar</button>
          <ButtonLink href='/'>¿Aún no tienes una cuenta? Regístrate aquí.</ButtonLink>
        </Form>
      )}
    </Formik>
  );
}

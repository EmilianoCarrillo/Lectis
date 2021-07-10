import styles from "./loginForm.module.scss";
import utils from "../styles/utils.module.css";
import React, {useEffect, useState} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import ButtonLink from "./buttonLink";
import Image from 'next/image'

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("El correo no está escrito correctamente.")
    .required("El correo es obligatorio."),
  password: Yup.string().required("La contraseña es obligatoria."),
});

export default function LoginForm() {
  const [passwordHidden, setPasswordHidden] = useState(true)

  function handleEyeClick() {
    setPasswordHidden(!passwordHidden)
  }

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
            <label className={utils.body_regular}>Correo</label>
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
            <label className={utils.body_regular}>Contraseña
              <div className={styles.forgotPass}>
                <ButtonLink href='/'>Olvidé mi contraseña</ButtonLink>
              </div>
            </label>
            <div className={styles.passwordFieldGroup}>
              <Field
                type={passwordHidden ? 'password' : 'text'}
                name="password"
                className={styles.field}
              />
              <button className={styles.btnPassword} type='button' onClick={handleEyeClick}>
                <Image 
                width='24'
                height='24'
                src={`/assets/${passwordHidden ? 'eye' : 'eye-closed'}.svg`}/>
              </button>
            </div>
            <ErrorMessage name="password" >
              { msg => <div className={`${utils.small_regular} ${styles.error}`}>{msg}</div> }
            </ErrorMessage>
          </div>
          <button type="submit" className={`${styles.cta} ${!isValid && styles.disabled}`}>Entrar</button>
          <ButtonLink href='/registro'>¿Aún no tienes una cuenta? Regístrate aquí.</ButtonLink>
        </Form>
      )}
    </Formik>
  );
}

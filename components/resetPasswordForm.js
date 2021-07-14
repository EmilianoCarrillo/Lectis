import styles from "./loginForm.module.scss";
import utils from "../styles/utils.module.css";
import React, {useEffect, useState} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ButtonLink from "./buttonLink";
import { useAuth } from "../hooks/useAuth";
import { useRouter } from "next/router";
import CTAButton from './cta-button'

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("El correo está escrito de forma incorrecta.")
    .required("Es necesario que escribas tu correo."),
});

export default function ResetPasswordForm() {
  const [isLoading, setIsLoading] = useState(false);
  const auth = useAuth();
  const router = useRouter();
  return (
    <Formik
      initialValues={{
        email: "",
      }}
      validationSchema={LoginSchema}
      onSubmit={(values, { setSubmitting }) => {
        setIsLoading(true)
        auth.sendPasswordResetEmail(values.email)
        router.push('/ingresa')
        setIsLoading(false)
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
          <CTAButton isLoading={isLoading} isValid={isValid} label='Enviar Correo' labelWhileLoading='Enviando correo'/>
          <ButtonLink href='/ingresa'>¿Sí te sabes tu contraseña? Ingresa aquí.</ButtonLink>
          {/* <ButtonLink href='/'>Solicitar ayuda</ButtonLink> */}
        </Form>
      )}
    </Formik>
  );
}

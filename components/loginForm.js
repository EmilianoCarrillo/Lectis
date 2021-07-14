import styles from "./loginForm.module.scss";
import utils from "../styles/utils.module.css";
import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import ButtonLink from "./buttonLink";
import Image from "next/image";
import { useAuth } from "../hooks/useAuth";
import { useRouter } from "next/router";
import CTAButton from "./cta-button";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("El correo no está escrito correctamente.")
    .required("El correo es obligatorio."),
  password: Yup.string().required("La contraseña es obligatoria."),
});

export default function LoginForm() {
  const [passwordHidden, setPasswordHidden] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const auth = useAuth();
  const router = useRouter();

  function handleEyeClick() {
    setPasswordHidden(!passwordHidden);
  }

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={LoginSchema}
      onSubmit={(values, { setSubmitting }) => {
        setIsLoading(true);
        setError(null);
        return auth.signIn(values).then((response) => {
          setIsLoading(false);
          response.error ? setError(response.error) : router.push("/");
        });
      }}
      validateOnMount
    >
      {({ isSubmitting, isValid }) => (
        <Form className={styles.wrapper}>
          <div className={styles.inputGroup}>
            <label className={utils.body_regular}>Correo</label>
            <Field type="email" name="email" className={styles.field} />
            <ErrorMessage name="email">
              {(msg) => (
                <div className={`${utils.small_regular} ${styles.error}`}>
                  {msg}
                </div>
              )}
            </ErrorMessage>
            {error?.code == 'auth/user-not-found' && (
              <div className={`${utils.small_regular} ${styles.correoUsado}`}>
                <span>No existe una cuenta con este correo.{' '}
                  <div className={styles.is}>
                    <ButtonLink href="/registro">Puedes registrarte aquí.</ButtonLink>
                  </div>
                </span>
              </div>
            )}
          </div>
          <div className={styles.inputGroup}>
            <label className={utils.body_regular}>
              Contraseña
              <div className={styles.forgotPass}>
                <ButtonLink href="/recuperar-contrasena">
                  Olvidé mi contraseña
                </ButtonLink>
              </div>
            </label>
            <div className={styles.passwordFieldGroup}>
              <Field
                type={passwordHidden ? "password" : "text"}
                name="password"
                className={styles.field}
              />
              <button
                className={styles.btnPassword}
                type="button"
                onClick={handleEyeClick}
              >
                <Image
                  width="24"
                  height="24"
                  src={`/assets/${passwordHidden ? "eye" : "eye-closed"}.svg`}
                />
              </button>
            </div>
            <ErrorMessage name="password">
              {(msg) => (
                <div className={`${utils.small_regular} ${styles.error}`}>
                  {msg}
                </div>
              )}
            </ErrorMessage>
            {error?.code == 'auth/wrong-password' ? (
              <div className={`${utils.small_regular} ${styles.correoUsado}`}>
                <span>Parece que la contraseña es incorrecta</span>
              </div>
            ) :
            (
              error?.code != 'auth/user-not-found' && 
              <div className={`${utils.small_regular} ${styles.correoUsado}`}>
                <span>{error?.message}</span>
              </div>
            )}
          </div>
          <CTAButton
            isLoading={isLoading}
            isValid={isValid}
            label="Entrar"
            labelWhileLoading="Autenticando"
          />
          <ButtonLink href="/registro">
            ¿Aún no tienes una cuenta? Regístrate aquí.
          </ButtonLink>
        </Form>
      )}
    </Formik>
  );
}

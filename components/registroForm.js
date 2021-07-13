import styles from "./loginForm.module.scss";
import utils from "../styles/utils.module.css";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ButtonLink from "./buttonLink";
import { useAuth } from "../hooks/useAuth";
import { useRouter } from "next/router";

const LoginSchema = Yup.object().shape({
  name: Yup.string().required("Tu nombre es obligatorio."),
  email: Yup.string()
    .email("El correo no está escrito correctamente.")
    .required("El correo es obligatorio."),
  password: Yup.string()
    .required("La contraseña es obligatoria.")
    .min(8, "La contraseña debe tener mínimo 6 caracteres."),
  confirmPassword: Yup.string()
    .required("Necesitas confirmar tu contraseña.")
    .oneOf([Yup.ref("password"), null], "Las contraseñas no coinciden."),
});

export default function RegistroForm() {
  const [emailEnUso, setEmailEnUso] = useState(false);
  const auth = useAuth();
  const router = useRouter();
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        nickname: "",
      }}
      validationSchema={LoginSchema}
      onSubmit={(values, { setSubmitting }) => {
        auth.signUp(values).then((response) => {
          console.log(response.error);
          if (
            response.error &&
            response.error.code == "auth/email-already-in-use"
          ) {
            setEmailEnUso(true);
          } else {
            router.push("/");
          }
        });
      }}
      onChange={() => {  
        setEmailEnUso(false);
      }}
      validateOnMount
    >
      {({ isSubmitting, isValid, handleChange }) => (
        <Form className={styles.wrapper}>
          <div className={styles.inputGroup}>
            <label className={utils.body_regular}>
              Tu nombre real con apellidos
            </label>
            <Field type="text" name="name" className={styles.field} />
            <ErrorMessage name="name">
              {(msg) => (
                <div className={`${utils.small_regular} ${styles.error}`}>
                  {msg}
                </div>
              )}
            </ErrorMessage>
          </div>
          <div className={styles.inputGroup}>
            <label className={utils.body_regular}>
              Apodo <span className={styles.light}>(opcional)</span>
            </label>
            <Field type="text" name="nickname" className={styles.field} />
            <ErrorMessage name="nickname">
              {(msg) => (
                <div className={`${utils.small_regular} ${styles.error}`}>
                  {msg}
                </div>
              )}
            </ErrorMessage>
          </div>
          <div className={styles.inputGroup}>
            <label className={utils.body_regular}>Correo</label>
            <Field
              type="email"
              name="email"
              className={styles.field}
              onKeyUp={() => {setEmailEnUso(false)}}
            />
            <ErrorMessage name="email">
              {(msg) => (
                <div className={`${utils.small_regular} ${styles.error}`}>
                  {msg}
                </div>
              )}
            </ErrorMessage>
            {emailEnUso && (
              <div className={`${utils.small_regular} ${styles.correoUsado}`}>
                Ese correo ya está en uso. Cámbialo o{" "}
                <div className={styles.is}>
                  <ButtonLink href="/ingresa">inicia sesión aquí.</ButtonLink>
                </div>
              </div>
            )}
          </div>
          <div className={styles.inputGroup}>
            <label className={utils.body_regular}>Contraseña</label>
            <Field type="password" name="password" className={styles.field} />
            <ErrorMessage name="password">
              {(msg) => (
                <div className={`${utils.small_regular} ${styles.error}`}>
                  {msg}
                </div>
              )}
            </ErrorMessage>
          </div>
          <div className={styles.inputGroup}>
            <label className={utils.body_regular}>Repite tu contraseña</label>
            <Field
              type="password"
              name="confirmPassword"
              className={styles.field}
            />
            <ErrorMessage name="confirmPassword">
              {(msg) => (
                <div className={`${utils.small_regular} ${styles.error}`}>
                  {msg}
                </div>
              )}
            </ErrorMessage>
          </div>
          <button
            type="submit"
            className={`${styles.cta} ${(!isValid || emailEnUso) && styles.disabled}`}
          >
            Comenzar a leer
          </button>
          <ButtonLink href="/ingresa">
            ¿Ya tienes una cuenta? Inicia sesión.
          </ButtonLink>
        </Form>
      )}
    </Formik>
  );
}

import React from "react";
import utils from '../styles/utils.module.css'
import styles from './ingresa.module.scss'
import NavigationBar from '../components/navigation-bar'
import ResetPasswordForm from "../components/resetPasswordForm";
 
export default function RecuperarContrasena() {
  return (
    <>
    <NavigationBar href='/ingresa'/>
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <p className={utils.subtitle_regular}>¿Olvidaste tu contraseña?</p>
        <h2 className={utils.body_regular}>Ingresa tu correo. Si ya te habías creado una cuenta de Lectis, te llegará al correo un enlace para cambiar tu contraseña.</h2>
      </div>
      <ResetPasswordForm />
    </div>
    </>
  );
}

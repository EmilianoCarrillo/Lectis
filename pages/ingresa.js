import React from "react";
import utils from '../styles/utils.module.css'
import styles from './ingresa.module.scss'
import LoginForm from "../components/loginForm";
import NavigationBar from '../components/navigation-bar'
 
export default function Ingresa() {
  return (
    <>
    <NavigationBar/>
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h2 className={utils.body_regular}>Inicio de sesión</h2>
        <p className={utils.subtitle_regular}>¡Hola de nuevo!</p>
      </div>
      <LoginForm />
    </div>
    </>
  );
}

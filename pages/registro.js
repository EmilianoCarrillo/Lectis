import React from "react";
import utils from '../styles/utils.module.css'
import styles from './ingresa.module.scss'
import RegistroForm from "../components/registroForm";
import NavigationBar from '../components/navigation-bar'
 
export default function Registro() {
  return (
    <>
    <NavigationBar/>
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h2 className={utils.body_regular}>Registro de una cuenta nueva</h2>
        <p className={utils.subtitle_regular}>¡Bienvenida/o!</p>
      </div>
      <RegistroForm />
    </div>
    </>
  );
}

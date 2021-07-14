import styles from "./ajustes.module.scss";
import utils from "../styles/utils.module.css";
import NavigationBar from "../components/navigation-bar";
import Link from "next/link";
import { useAuth } from "../hooks/useAuth";

function AjustesBtn({ label, red, onClick }) {
  return (
    <button
      className={`${styles.ajustesBtn} ${red && styles.red}`}
      onClick={onClick}
    >
      <span className={utils.body_regular}>{label}</span>
    </button>
  );
}

export default function Ajustes() {
  const auth = useAuth();

  return (
    <div className={styles.wrapper}>
      <NavigationBar />
      <div className={styles.menu}>
        <h2 className={utils.title_medium}>Ajustes</h2>
        {/* <AjustesBtn label='Editar información del perfil' />
        <AjustesBtn label='Contacto' />
        <AjustesBtn label='Acerca de nosotros' /> */}
        <AjustesBtn label="Cerrar Sesión" red onClick={
          () => auth.signOut()
        }/>
      </div>
    </div>
  );
}

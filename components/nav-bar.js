import NavBarButton from './nav-bar-btn'
import styles from './nav-bar.module.scss'
import { useRouter } from "next/router";

export default function NavBar() {
  const path = useRouter().pathname;
  return (
    <ul className={styles.wrapper}>
      <NavBarButton label='Inicio' href='/' isActive={path == '/'}/>
      <NavBarButton label='Perfil' href='/Perfil' isActive={path == '/Perfil'}/>
      <NavBarButton label='Buscar' href='/Buscar' isActive={path == '/Buscar'}/>
    </ul>
  )
}
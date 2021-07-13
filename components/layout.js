import styles from './layout.module.css'
import NavBar from './nav-bar'
import { useAuth } from "../hooks/useAuth";

export default function Layout({ children }) {
  const auth = useAuth();
  return <div className={styles.container}>
    {children} 
    {
      auth.user &&
      <NavBar /> 
    }
  </div>
}
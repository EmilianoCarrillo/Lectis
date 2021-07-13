import styles from './ajustes.module.scss'
import utils from '../styles/utils.module.css'
import NavigationBar from '../components/navigation-bar'
 
export default function Ajustes() {
  return (
    <div className={styles.wrapper}>
      <NavigationBar/>
    </div>
  );
}

import styles from './tabs.module.scss'
import utils from '../styles/utils.module.css'

function Tabs({ cantidad }) {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.tab} ${styles.correcta}`}></div>
      <div className={`${styles.tab} ${styles.incorrecta}`}></div>
      <div className={styles.tab}></div>
    </div>
  )
}

export default Tabs

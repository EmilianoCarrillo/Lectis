import styles from './footer.module.scss'
import utils from '../styles/utils.module.css'

function FloatingButton( ) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.copyright}>
        <span className={utils.caption_bold}>LECTIS</span>
        <span className={utils.small_regular}> © {new Date().getFullYear()}</span>
      </div>
      <div className={styles.links}>
        
      </div>
    </div>
  )
}

export default FloatingButton

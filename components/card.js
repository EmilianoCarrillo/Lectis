import styles from './card.module.scss'
import utils from '../styles/utils.module.css'

function Card({ Large }) { 
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.cover} ${Large && styles.large}`} />
      <div className={styles.text}>
        <h4 className={utils.body_regular}>Alicia en el país de las Maravillas</h4>
        <p className={utils.small_regular}>Jane Austen</p>
      </div>
    </div>
  )
}

export default Card

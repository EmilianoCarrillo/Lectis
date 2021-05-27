import utils from '../styles/utils.module.css'
import styles from './lectura-card.module.scss'

function LecturaCard(props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}/>
      <div className={styles.content}>
        <div className={styles.text}>
          <h2 className={utils.subtitle_medium}>{props.titulo}</h2>
          <p className={utils.body_regular}>{props.autor}</p>
        </div>
        <img  className={styles.lvl} 
              src="/assets/lvl1.svg" />
      </div>
    </div>
  )
}

export default LecturaCard
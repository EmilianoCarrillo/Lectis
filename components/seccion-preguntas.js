import styles from './seccion-preguntas.module.scss'
import utils from '../styles/utils.module.css'

function SeccionPreguntas({ abierta }) {
  return (
    <div className={`${styles.wrapper} ${abierta && styles.abierta}`}>
      {/* (STEPS) */}
      <div className={styles.text}>
        <span className={utils.caption_medium}>2/3</span>
        <h3 className={utils.subtitle_regular}>¿Cuál es el nombre del granjero que se encontró el cazador en su travesía por el bosque?</h3>
      </div>
       {/* (RESPUESTAS)  */}
      <div className={styles.retroalimentacion}>
        <p className={utils.body_regular}>El granjero dice ser llamado Pepe el bailador pero su nombre verdadero es José Carlos</p>
      </div>
      <button className={styles.siguiente_btn}>
        <span className={utils.body_regular}>Siguiente Pregunta</span>
        <img src="/assets/next.svg"/>
      </button>
      
    </div>
  )
}

export default SeccionPreguntas

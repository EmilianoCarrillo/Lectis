import styles from './opciones.module.scss'
import utils from '../styles/utils.module.css'

function Opciones({ respuestas }) {

  const handleOpcionClick = (respuesta) => {
    
  }

  return (
    <div className={styles.wrapper}>
      {
        respuestas.map( respuesta => (
          <button className={styles.opcion} onTouchStart="" 
            onClick={() => handleOpcionClick(respuesta)}> 
            <span className={utils.body_regular}>
              {respuesta.label}
            </span>
          </button>
        ))
      }
    </div>
  )
}

export default Opciones

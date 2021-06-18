import styles from './floating-button.module.scss'
import utils from '../styles/utils.module.css'

function FloatingButton({ onClick, preguntasAbiertas }) {
  return (
    <button 
      className={`${styles.floating_button} ${preguntasAbiertas && styles.dark}`}
      onClick={onClick}>
        <img src={'/assets/' + (preguntasAbiertas ? 'chevron-down' : 'chevron-up')+ '.svg'} alt={'Ir a ' + (preguntasAbiertas ? 'la lectura' : 'las preguntas')}/>
        <span className={utils.small_regular}>{preguntasAbiertas ? 'Volver a la lectura' : 'Abrir preguntas'}</span>
    </button>
  )
}

export default FloatingButton

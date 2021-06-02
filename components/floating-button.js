import styles from './floating-button.module.scss'

function FloatingButton({ onClick, preguntasAbiertas }) {
  return (
    <button 
      className={`${styles.floating_button} ${preguntasAbiertas && styles.dark}`}
      onClick={onClick}>
        <img src={'/assets/' + (preguntasAbiertas ? 'text' : 'question')+ '.svg'} alt={'Ir a ' + (preguntasAbiertas ? 'la lectura' : 'las preguntas')}/>
    </button>
  )
}

export default FloatingButton

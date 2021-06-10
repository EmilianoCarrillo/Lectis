import styles from './opciones.module.scss'
import utils from '../styles/utils.module.css'
import { useState, useRef, useEffect } from 'react'

function Opciones({ respuestas, handleClick }) {

  const [hasClicked, setHasClicked] = useState(false)
  const refs = useRef([React.createRef(), React.createRef(), React.createRef(), React.createRef()]);

  const handleOpcionClick = (respuesta, e) => {
    setHasClicked(true)
    if(!respuesta.correcta){
      e.target.style.setProperty('background', 'var(--red--500)')
      e.target.style.setProperty('color', 'var(--grey--100)')
    }
    handleClick(refs, respuesta.correcta)
  }

  useEffect( () => {
    setHasClicked(false)     
  }, [respuestas])

  return (
    <div className={styles.wrapper}>
      {
        respuestas.map( (respuesta, i) => (
          <button
          key={i} 
          ref={refs.current[i]}
          className={`${styles.opcion} 
          ${hasClicked && respuesta.correcta && styles.correcta}
          ${hasClicked && !respuesta.correcta && styles.incorrecta}`} 
          onTouchStart="" onClick={e => handleOpcionClick(respuesta, e)}> 
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

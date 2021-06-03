import styles from './seccion-preguntas.module.scss'
import utils from '../styles/utils.module.css'
import Tabs from './tabs'
import Opciones from './opciones'
import { useState, useRef, useEffect } from 'react'

const shuffle = (arr) => {
  return Array(arr.length).fill(null)
      .map((_, i) => [Math.random(), i])
      .sort(([a], [b]) => a - b)
      .map(([, i]) => arr[i])
}

function SeccionPreguntas({ abierta, preguntas }) {

  const [currentQIndex, setCurrentQIndex] = useState(0)
  const [respuestasAleatorias, setRespuestasAleatorias] = useState(shuffle(preguntas[currentQIndex].respuestas))

  const handleSiguientePreguntaClick = () => {
    if (currentQIndex == preguntas.length-1){
      return;
    }
    setCurrentQIndex(currentQIndex+1);
  }

  useEffect( () => {
    setRespuestasAleatorias(shuffle(preguntas[currentQIndex].respuestas));
  }, [currentQIndex])

  return (
    <div className={`${styles.wrapper} ${abierta && styles.abierta}`}>
      <Tabs cantidad={preguntas.length}/>
      <div className={styles.text}>
        <span className={utils.caption_medium}>
          {currentQIndex+1}/{preguntas.length}
        </span>
        <h3 className={utils.subtitle_regular}>
          {preguntas[currentQIndex].pregunta}
        </h3>
      </div>
      <Opciones respuestas={respuestasAleatorias}/>
      {/* <div className={styles.retroalimentacion}>
        <p className={utils.body_regular}>
          {preguntas[currentQIndex].retroalimentacion}
        </p>
      </div> */}
      <button className={styles.siguiente_btn} onClick={handleSiguientePreguntaClick}>
        <span className={utils.body_regular}>
        {
          currentQIndex == preguntas.length-1 ?  
          'Reclamar Recompensa' : 'Siguiente Pregunta'
        }
        </span>
        <img src="/assets/next.svg"/>
      </button>
      
    </div>
  )
}

export default SeccionPreguntas

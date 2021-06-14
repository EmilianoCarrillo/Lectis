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
  const [showFeedback, setShowFeedback] = useState(false)
  const [refOpciones, setRefOpciones] = useState()
  const[resultados, setResultados] = useState()

  const handleSiguientePreguntaClick = () => {
    if (currentQIndex == preguntas.length-1){
      return;
    }
    setCurrentQIndex(currentQIndex+1);
    refOpciones.current.map( ref => {
      ref.current.style.removeProperty('background')
      ref.current.style.removeProperty('color')
      ref.current.style.removeProperty('animation')
      ref.current.style.removeProperty('-webkit-animation')
    })
  }

  const handleOpcionClick = (refs, esCorrecta) => {
    resultados[currentQIndex] = esCorrecta ? 'correcta' : 'incorrecta';
    setShowFeedback(true)
    setRefOpciones(refs)
  }

  useEffect( () => {
    setShowFeedback(false)
    setRespuestasAleatorias(shuffle(preguntas[currentQIndex].respuestas));
  }, [currentQIndex])

  useEffect( () => {
    let res = new Array();
    for(let i = 0; i < preguntas.length; i++){
      res[i] = 'empty'
    }
    setResultados(res)
  }, [preguntas])

  return (
    <div className={`${styles.wrapper} ${abierta && styles.abierta}`}>
      <div className={`${styles.shadow} ${abierta && styles.abierta}`}></div>
      { resultados && <Tabs resultados={resultados}/>}
      <div className={styles.contentWrapper}>
        <div className={styles.text}>
          <span className={utils.caption_medium}>
            {currentQIndex+1}/{preguntas.length}
          </span>
          <h3 className={utils.subtitle_regular}>
            {preguntas[currentQIndex].pregunta}
          </h3>
        </div>
        <Opciones respuestas={respuestasAleatorias} handleClick={handleOpcionClick}/>
        
        <div className={`${styles.feedbackWrapper} ${!showFeedback && styles.hideFb}`}>
          <div className={styles.retroalimentacion}>
            <p className={utils.body_regular}>
              {preguntas[currentQIndex].retroalimentacion}
            </p>
          </div>
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
      </div>
    </div>
  )
}

export default SeccionPreguntas

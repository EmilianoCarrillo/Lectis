import styles from './tabs.module.scss'
import utils from '../styles/utils.module.css'

function Tabs({ resultados }) {
  console.log(resultados)
  return (
    <div className={styles.wrapper}>
    {
      resultados.map( (resultado, i) => (
        <div  key={i} 
              className={`${styles.tab} 
                          ${resultado == 'correcta' && styles.correcta}
                          ${resultado == 'incorrecta' && styles.incorrecta}`}></div>
      ))
    }
    </div>
  )
}

export default Tabs

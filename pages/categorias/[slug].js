import utils from '../../styles/utils.module.css'
import styles from './categorias.module.scss'
import NavigationBar from '../../components/navigation-bar'
import LecturaCard from '../../components/lectura-card'

function Lecturas() {
  return (
    <div>
      <NavigationBar />
      <div className={styles.title}>
        <img src="/assets/science.svg" alt="icono" />
        <p className={utils.subtitle_regular}>Ciencia y Tecnología</p>
      </div>

      <div className={styles.card_list}>
        <LecturaCard 
          titulo = "El electrón: Una mirada hacia su historia"
          autor = "Andrés Parra" 
        />
      </div>
    </div>
  )
}

export default Lecturas
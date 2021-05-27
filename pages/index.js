import utils from '../styles/utils.module.css'
import styles from './index.module.scss'

const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
})

function Inicio() {
  return (
    <div className={styles.global_wrapper}>
      <div className={styles.heading}>
        <p className={utils.subtitle_regular}>Hola, ElMagoJael</p>
        <p className={utils.title_medium}>¿Qué leeremos hoy?</p>
      </div>

      <div className={styles.card}>

      </div>

      <div classname={styles.categorias}>
        <p className={utils.caption_medium }>Categorías</p>
      </div>
    </div>
  )
}

export default Inicio
import utils from '../styles/utils.module.css'
import styles from './seccion-categorias.module.scss'
import BotonCategoria from './boton-categoria'

function SeccionCategorias({ categorias }) {
  return (
    <div className={styles.categorias}>
      <p className={utils.caption_medium }>Categorías</p>
      {
        categorias.map(categoria => (
          <BotonCategoria 
            key={categoria.sys.id}
            categoria={categoria}/>
        ))
      }
    </div>
  )
}

export default SeccionCategorias
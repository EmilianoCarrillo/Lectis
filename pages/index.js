import utils from '../styles/utils.module.css'
import styles from './index.module.scss'
import { createClient } from 'contentful'
import BotonCategoria from '../components/boton-categoria'
import Slider from '../components/slider'

export async function getStaticProps() {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  })

  const res = await client.getEntries({ content_type: 'categoria' })

  return {
    props: {
      categorias: res.items
    },
    revalidate: 1
  }
}

const media = ['/assets/callout 1.png','/assets/callout 2.png','/assets/callout 3.png']

function Inicio({ categorias }) {
  return (
    <div className={styles.global_wrapper}>
      <div className={styles.heading}>
        <p className={utils.subtitle_regular}>Bienvenida/o, lector/a</p>
        <p className={utils.title_medium}>¿Qué leeremos hoy?</p>
      </div>

      {/* Placeholder blue card. Deprecieted
      <div className={styles.card}>
      </div> */}

      <Slider media={media}/>

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
    </div>
  )
}

export default Inicio
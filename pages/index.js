import utils from '../styles/utils.module.css'
import styles from './index.module.scss'
import { createClient } from 'contentful'
import Slider from '../components/slider'
import SeccionCategorias from '../components/seccion-catagorias'
import Collection from '../components/collection'

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

      <Collection />

      <Slider media={media}/>
      <SeccionCategorias categorias={categorias}/>

      
    </div>
  )
}

export default Inicio
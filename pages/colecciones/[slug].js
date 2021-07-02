import utils from '../../styles/utils.module.css'
import styles from './colecciones.module.scss'
import NavigationBar from '../../components/navigation-bar'
import CardGrid from '../../components/card-grid'
import { createClient } from 'contentful'
import Footer from '../../components/footer'

// Generar páginas por cada categoría
const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
})

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: 'coleccin'
  })

  const paths = res.items.map(item => {
    return {
      params: {slug: item.fields.slug }
    }
  })

  return{
    paths: paths,
    fallback: false
  }
}

// Recolectar datos de esta categoría
export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: 'coleccin',
    'fields.slug': params.slug
  })

  return{
    props: { 
      coleccion : items[0]
    }, 
    revalidate: 1
  }
}

function Colecciones({ coleccion }) {
  const { titulo, slug, coleccionDestacada, descripcion, lecturas  } = coleccion.fields

  return (
    <div>
      <NavigationBar />
      <div className={styles.title}>
        <p className={`${utils.caption_medium} ${styles.tagline}`}>COLLECCIÓN</p>
        <h2 className={utils.subtitle_medium}>{titulo}</h2>
        <p className={!coleccionDestacada && styles.hidden}>{descripcion}</p>
      </div>

      <CardGrid lecturas={lecturas} />

      <Footer />
    </div>
  )
}

export default Colecciones
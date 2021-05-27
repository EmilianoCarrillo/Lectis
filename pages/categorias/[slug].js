import utils from '../../styles/utils.module.css'
import styles from './categorias.module.scss'
import NavigationBar from '../../components/navigation-bar'
import LecturaCard from '../../components/lectura-card'
import { createClient } from 'contentful'

// Generar páginas por cada categoría
const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
})

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: 'categoria'
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
    content_type: 'categoria',
    'fields.slug': params.slug
  })

  return{
    props: { categoria : items[0] }
  }
}

function Lecturas({ categoria }) {
  console.log(categoria);
  return (
    <div>
      <NavigationBar />
      <div className={styles.title}>
        <img src={'https:' + categoria.fields.icono.fields.file.url} 
          alt="icono" />
        <p className={utils.subtitle_regular}>{categoria.fields.nombre}</p>
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
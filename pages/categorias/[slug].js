import utils from '../../styles/utils.module.css'
import styles from './categorias.module.scss'
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

  const lects  = await client.getEntries({
    content_type: 'lectura',
    'fields.categoria.sys.id': items[0].sys.id
  })

  return{
    props: { 
      categoria : items[0],
      lecturas : lects.items
    }, 
    revalidate: 1
  }
}

function Lecturas({ categoria, lecturas }) {
  return (
    <div>
      <NavigationBar />
      <div className={styles.title}>
        <img src={'https:' + categoria.fields.icono.fields.file.url} 
          alt="icono" />
        <p className={utils.subtitle_regular}>{categoria.fields.nombre}</p>
      </div>

      <CardGrid lecturas={lecturas} />
      <Footer />
    </div>
  )
}

export default Lecturas
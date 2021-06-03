import utils from '../../styles/utils.module.css'
import styles from './lectura.module.scss'
import NavigationBar from '../../components/navigation-bar'
import { createClient } from 'contentful'
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import AudioPlayer from '../../components/audio-player'
import { BLOCKS } from "@contentful/rich-text-types"
import SeccionPreguntas from '../../components/seccion-preguntas'
import { useState, useRef, useEffect } from 'react'
import FloatingButton from '../../components/floating-button'

// Generar páginas por cada lectura
const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
})

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: 'lectura'
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

// Recolectar datos de esta lectura
export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: 'lectura',
    'fields.slug': params.slug
  })

  return{
    props: { 
      lectura : items[0]
    },
    revalidate: 1
  }
}

const dtrOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => (
      <img
        src={node.data?.target?.fields?.file?.url}
        alt={node.data?.target?.fields?.title}
      />
    ),
  },
};

function Lectura({ lectura }) {
  const { titulo , autor, nivel, slug, portada, categoria, cuerpo, audio, preguntas } = lectura.fields  

  const [preguntasAbiertas, setPreguntasAbiertas] = useState(false)

  const handleFloatingBtnClick = () => {
    setPreguntasAbiertas(!preguntasAbiertas);
  }

  return (
    <div>
      <NavigationBar />
      <div className={styles.header}>
        <h1 className={utils.title_medium}>{titulo}</h1>
        <h3 className={utils.subtitle_regular}>{autor}</h3>
      </div>
      <div className={styles.cover}>
          <Image className={styles.image}
              src={'https:' + portada.fields.file.url} 
              layout="fill" objectFit="cover"
          />
          <div className={styles.lvl_badge}>
            <span>Nivel {nivel}</span> 
            <img  className={styles.lvl} 
                src={"/assets/lvl"+ nivel +".svg"}/>
          </div>
      </div>
      <div className={[styles.body, utils.reading_regular].join(' ')}>
      {documentToReactComponents(cuerpo, dtrOptions)}
      </div>
      <div className={`${styles.fixed_elements} ${audio && preguntasAbiertas && styles.pausado}`}>
        {
          preguntas &&
          <FloatingButton onClick={handleFloatingBtnClick} preguntasAbiertas={preguntasAbiertas}/> 
        }
        {
          audio && <AudioPlayer audio={audio} pausar={preguntasAbiertas}/>
        }
      </div>
      {
        preguntas &&
        <SeccionPreguntas abierta={preguntasAbiertas} preguntas={preguntas}/>
      }
    </div>
  )
}

export default Lectura
import styles from './boton-categoria.module.scss'
import utils from '../styles/utils.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function BotonCategoria({ categoria }) {
  const { nombre, icono, slug } = categoria.fields

  return (
    <Link href={'/categorias/' + slug}>
      <div className={styles.container} >
        {/* <Image src={'https:' + icono.fields.file.url} 
          width={icono.fields.file.details.image.width}
          height={icono.fields.file.details.image.height}
        /> */}
        <img src={'https:' + icono.fields.file.url}/>
        <h3 className={utils.subtitle_regular}>{ nombre}</h3>
      </div>
    </Link>
  )
}
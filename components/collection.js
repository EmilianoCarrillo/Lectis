import styles from './collection.module.scss'
import utils from '../styles/utils.module.css'
import Card from '../components/card'
import Link from 'next/link'
import Image from 'next/image'

export default function Collection({ coleccion }) {
  const { titulo, slug, coleccionDestacada, descripcion, lecturas  } = coleccion.fields

  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <Link href='/'>
          <div className={styles.titleLink}>
            <h4 className={utils.subtitle_medium}>{titulo}</h4>
            <Image src='/assets/chevron-right.svg' width={16} height={16} 
            className={styles.chevron}/>
          </div>
        </Link>
        { coleccionDestacada &&
          <p>{descripcion}</p>
        }
      </div>
      <div className={styles.cards}>
        {
          lecturas.map(lectura => (
            <Card Large={coleccionDestacada} lectura={lectura} key={lectura.sys.id}/>
          ))
        }
        <div className={styles.separator}/>
      </div>
    </div>
  )
}
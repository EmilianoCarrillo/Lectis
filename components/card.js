import styles from './card.module.scss'
import utils from '../styles/utils.module.css'
import Image from 'next/image'

function Card({ Large, lectura }) { 
  const { titulo, slug, autor, imagenDeTarjeta} = lectura.fields
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.cover} ${Large && styles.large}`}>
        <Image src={'https:' + imagenDeTarjeta.fields.file.url} 
          width={imagenDeTarjeta.fields.file.details.image.width}
          height={imagenDeTarjeta.fields.file.details.image.height}
        />
      </div>
      <div className={`${styles.text} ${Large && styles.large}`}>
        <h4 className={utils.body_regular}>{titulo}</h4>
        <p className={utils.small_regular}>{autor}</p>
      </div>
    </div>
  )
}

export default Card

import styles from './card.module.scss'
import utils from '../styles/utils.module.css'
import Image from 'next/image'
import Link from 'next/link'
import BookCover from './book-cover'

function Card({ Large, lectura, Responsive }) { 
  const { titulo, slug, autor, imagenDeTarjeta} = lectura.fields
  return (
    <Link href={'/lecturas/' + slug}>
    <div className={`${styles.wrapper} ${Responsive && styles.responsive}`}>
      <div className={`${styles.cover} ${Large && styles.large} 
        ${Responsive && styles.responsive}`}>
        {
          !imagenDeTarjeta ?
          <BookCover lectura={lectura}/> :
          <Image src={'https:' + imagenDeTarjeta.fields.file.url} 
            layout={Responsive && 'fill'}
            objectFit={Responsive && 'cover'}
            width={!Responsive && imagenDeTarjeta.fields.file.details.image.width}
            height={!Responsive && imagenDeTarjeta.fields.file.details.image.height}
          />
        }
      </div>
      <div className={`${styles.text} ${Large && styles.large} 
        ${Responsive && styles.responsive}`}>
        <h4 className={utils.body_regular}>{titulo}</h4>
        <p className={utils.small_regular}>{autor}</p>
      </div>
    </div>
    </Link>
  )
}

export default Card

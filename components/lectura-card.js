import utils from '../styles/utils.module.css'
import styles from './lectura-card.module.scss'
import Image from 'next/image'
import Link from 'next/link'

function LecturaCard({ lectura }) {
  const { titulo , autor, nivel, slug, portada } = lectura.fields  
  return (
    <Link href={'/lecturas/' + slug}>
      <div className={styles.wrapper}>
        <div className={styles.image_wrapper}>
          <Image className={styles.image}
              src={'https:' + portada.fields.file.url} 
              layout="fill" objectFit="cover"
          />
        </div>
        <div className={styles.content}>
          <div className={styles.text}>
            <h2 className={utils.subtitle_medium}>{titulo}</h2>
            <p className={utils.body_regular}>{autor}</p>
          </div>
          <img  className={styles.lvl} 
                src={"/assets/lvl" + nivel + ".svg"}/>
        </div>
      </div>
    </Link>
  )
}

export default LecturaCard
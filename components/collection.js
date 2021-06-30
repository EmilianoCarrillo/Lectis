import styles from './collection.module.scss'
import utils from '../styles/utils.module.css'
import Card from '../components/card'
import Link from 'next/link'
import Image from 'next/image'

export default function Collection() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <Link href='/'>
          <div className={styles.titleLink}>
            <h4 className={utils.subtitle_medium}>Mujeres que inspiran</h4>
            <Image src='/assets/chevron-right.svg' width={16} height={16} 
            className={styles.chevron}/>
          </div>
        </Link>
        <p>Para celebrar el día de la mujer, estos son algunos clásicos de la literatura escritos por mujeres</p>
      </div>
      <div className={styles.cards}>
        <Card Large/>
        <Card Large/>
        <Card Large/>
        <Card Large/>
        <Card Large/>
        <Card Large/>
        <div className={styles.separator}/>
      </div>
    </div>
  )
}
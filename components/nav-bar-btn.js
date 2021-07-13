import styles from './nav-bar-btn.module.scss'
import utils from '../styles/utils.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function NavBarButton({label, isActive, href}) {
  return (
    <Link href={href}>
    <li className={styles.wrapper}>
      <div className={styles.image}>
        <Image src={`/assets/${label}${isActive ? '-active' : ''}.svg`} width={24} height={24}/>
      </div>
      <p className={`${utils.small_regular} ${styles.label} ${isActive && styles.active}`}>{label}</p>
    </li>
    </Link>
  )
}
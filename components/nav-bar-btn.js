import styles from './nav-bar-btn.module.scss'
import utils from '../styles/utils.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function NavBarButton({label, isActive, href, onClick}) {
  return (
    <Link href={href}>
    <li className={styles.wrapper} onClick={onClick}>
      <div className={styles.image}>
        { isActive ? 
        <Image src={`/assets/${label}-active.svg`} width={24} height={24} priority/>
        :
        <Image src={`/assets/${label}.svg`} width={24} height={24} priority/>
        }
      </div>
      <p className={`${utils.small_regular} ${styles.label} ${isActive && styles.active}`}>{label}</p>
    </li>
    </Link>
  )
}
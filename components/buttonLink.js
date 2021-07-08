import styles from './buttonLink.module.scss'
import utils from '../styles/utils.module.css'
import Link from 'next/link'

export default function ButtonLink({ href, children }) { 
  return (
    <div className={`${styles.wrapper} ${utils.small_regular}`}>
      <Link href={href}>
        {children}
      </Link>
    </div>
  )
}
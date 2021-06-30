import styles from './navigation-bar.module.scss'
import { useRouter } from 'next/router'

function NavigationBar({ floating }) {
  const router = useRouter()
  return (
    <div className={`${styles.wrapper} ${styles.floating}`}>
        {
          floating ?
          <img src="/assets/back-black.svg" alt="Atrás" onClick={() => router.back()}/>
          :
          <img src="/assets/back.svg" alt="Atrás" onClick={() => router.back()}/>
        }
    </div>
  )
}

export default NavigationBar
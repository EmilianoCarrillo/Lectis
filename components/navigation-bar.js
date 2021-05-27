import styles from './navigation-bar.module.scss'
import { useRouter } from 'next/router'

function NavigationBar() {
  const router = useRouter()
  return (
    <div className={styles.wrapper}>
        <img src="/assets/back.svg" alt="Atrás" onClick={() => router.back()}/>
    </div>
  )
}

export default NavigationBar
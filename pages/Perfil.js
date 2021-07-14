import styles from './Perfil.module.scss'
import utils from '../styles/utils.module.css'
import TopBar from '../components/topBar'
import Image from 'next/image'
import { useRequireAuth } from '../hooks/useRequireAuth'
 
export default function Perfil() {
  const auth = useRequireAuth()
  return (
    <div className={styles.wrapper}>
      <TopBar title='Perfil' showSettingsBtn/>
      <div className={styles.avatarSection}>
        <div className={styles.profileBg}>
          <Image src='/assets/Profile_bg.svg' layout='fill' objectFit='cover'/>
        </div>
      </div>
    </div>
  );
}

import styles from './cta-button.module.scss'
import Spinner from '../components/spinner'

export default function CTAButton({label, labelWhileLoading, isValid, isLoading, type}){
  return(
    <button type={type}className={`${styles.cta} ${!isValid && styles.disabled}`}>
      {isLoading && (
      <Spinner width="20" fill="white" className={styles.animate_spin} />
      )}
      {isLoading ? labelWhileLoading : label}
    </button>
  )
}
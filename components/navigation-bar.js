import styles from './navigation-bar.module.scss'

function NavigationBar() {
  return (
    <div className={styles.wrapper}>
        <img src="/assets/back.svg" alt="Atrás" />
    </div>
  )
}

export default NavigationBar
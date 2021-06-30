import styles from './banner.module.scss'
import utils from '../styles/utils.module.css'

function Banner() { 

  const data = [1,2,3,4,5];

  return (
    <div className={styles.wrapper}>
      {
        data.map((item, i) => (
          <div key={i} className={styles.banner}>
            {i}
          </div>
        ))
      }    
    </div>
  )
}

export default Banner

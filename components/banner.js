import styles from './banner.module.scss'
import utils from '../styles/utils.module.css'
import React, {useState} from 'react'
import { useSwipeable } from 'react-swipeable'

function Banner() { 

  const [activeIndex, setActiveIndex] = useState(0)
  const data = [1,2,3,4,5];

  const updateIndex = (newIndex) => {
    newIndex = newIndex % data.length

    setActiveIndex(newIndex)
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  })

  return (
    <div className={styles.carousel}>
      <div 
        {...handlers}
        className={styles.wrapper}
        style={{
          transform : `translateX(-${activeIndex * 286}px)`,
          transition: `all 0.4s ease-in-out`
          }}
      >
        {
          data.map((item, i) => (
            <div 
              key={i} 
              className={`${styles.banner} ${activeIndex == i && styles.active}`}
            >
              {i}
            </div>
          ))
        }    
      </div>
    </div>
  )
}

export default Banner

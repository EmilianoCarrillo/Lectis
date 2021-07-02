import styles from './slider.module.scss'
import utils from '../styles/utils.module.css'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'

export default function Slider({media}) {

  const [currentIndex, setCurrentIndex] = useState(0)
  const mediaRef = useRef()

  const handleDrag = () => {
    setCurrentIndex((currentIndex+1) % media.length);
    mediaRef.current.style.setProperty("transform", 
    `translateX(-${mediaRef.current.clientWidth * ((currentIndex+1) % media.length)}px)`);
  }

  useEffect(() => {
    let timeout = setTimeout( () => {
      handleDrag()
    }, 6000)

    return () => {
      clearTimeout(timeout)
    }
  }, [currentIndex])

  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.mediawrapper}
              onTouchStart={(event) => {handleDrag(event)}}>
          <div className={styles.media} ref={mediaRef}>
          {
            media.map((item, i) => (
              <img src={item} key={i}
                className={styles.mediaItem}
              />
            ))
          }
          </div>
          <div className={styles.pagination}>
            {
              media.map((item, i) => (
                <div className={`${styles.dot} ${currentIndex == i &&  styles.current}`} key={i}/>        
              ))
            }     
          </div>
          <div className={styles.etiquette}>
            <span className={utils.caption_medium}>Muy pronto</span>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={`${styles.cta} ${styles.disabled}`}>
            <span className={utils.body_regular}>Créate una cuenta</span>
          </div>
        </div>
      </div>
      <div className={styles.gradient}>
          
      </div>
    </div>
  )
}
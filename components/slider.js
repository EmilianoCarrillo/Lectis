import styles from "./slider.module.scss";
import utils from "../styles/utils.module.css";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useSwipeable } from 'react-swipeable'

export default function Slider({ media }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const mediaRef = useRef();

  const updateIndex = (newIndex) => {
    if(newIndex < 0) newIndex = media.length-1
    newIndex = newIndex % media.length;
    mediaRef.current.style.setProperty(
      "transform",
      `translateX(-${
        mediaRef.current.clientWidth * ((newIndex) % media.length)
      }px)`
    );
    setCurrentIndex(newIndex)
    console.log(newIndex)
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(currentIndex + 1),
    onSwipedRight: () => updateIndex(currentIndex - 1),
  })


  useEffect(() => {
    let timeout = setTimeout(() => {
      updateIndex(currentIndex + 1)
    }, 6000);

    return () => {
      clearTimeout(timeout);
    };
  }, [currentIndex]);

  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <div
          {...handlers}
          className={styles.mediawrapper}
          // onTouchStart={(event) => {
          //   handleDrag(event);
          // }}
        >
          <div className={styles.media} ref={mediaRef}>
            {media.map((item, i) => (
              <img src={item} key={i} className={styles.mediaItem} />
            ))}
          </div>
          <div className={styles.pagination}>
            {media.map((item, i) => (
              <div
                className={`${styles.dot} ${
                  currentIndex == i && styles.current
                }`}
                key={i}
              />
            ))}
          </div>
          {/* <div className={styles.etiquette}>
            <span className={utils.caption_medium}>Muy pronto</span>
          </div> */}
        </div>
        <div className={styles.footer}>
          <div className={styles.cta2}>
            <Link href="/ingresa">
              <span className={utils.body_regular}>Inicia sesión</span>
            </Link>
          </div>
          <div className={`${styles.cta}`}>
            <Link href="/registro">
              <span className={utils.body_regular}>Créate una cuenta</span>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.gradient}></div>
    </div>
  );
}

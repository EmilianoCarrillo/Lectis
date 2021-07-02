import styles from './book-cover.module.scss'
import utils from '../styles/utils.module.css'
import Link from 'next/link'
import { useRef, useEffect } from 'react'

function BookCover({ lectura }) { 
  const { titulo, autor} = lectura.fields
  return (
    <div className={styles.wrapper} 
    // style={{
    //       background : `hsl(${(Math.random() * (360 - 0 + 1) ) << 0}, 51%, 22%)`,
    //     }}
    >
      <div className={styles.text}>
        <p className={styles.title}>{titulo}</p>
        <p className={styles.autor}>{autor}</p>
      </div>
    </div>
  )
}

export default BookCover

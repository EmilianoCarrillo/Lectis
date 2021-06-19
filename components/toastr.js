import styles from './toastr.module.scss'
import utils from '../styles/utils.module.css'
import { useState, useRef, useEffect } from 'react'

function Toastr({show}) {
  return (
    <div className={`${styles.wrapper} ${show && styles.animate}`}>
      <img src='/assets/rush.svg'/>
      <p className={utils.small_regular}>
        ¡No tan rápido!<br />
        Asegúrate de leer la pregunta antes de contestar.
      </p>
    </div>
  )
}

export default Toastr

import styles from './audio-player.module.scss'
import { useState } from 'react'

export default function AudioPlayer() {

  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  }

  return (
    <div className={styles.wrapper}>
      <audio src="https://upload.wikimedia.org/wikipedia/commons/d/de/Lorem_ipsum.ogg" preload="metadata" />
      <button onClick={togglePlayPause} className={styles.play_pause_btn}>
        <img src={ '/assets/' + (isPlaying ? 'pause' : 'play') + '.svg'  } alt="bot"/>
      </button>

      <div className={styles.progressbar_wrapper}>
        <input type="range" className={styles.progressbar}/>
      </div>
    </div>
  )
}

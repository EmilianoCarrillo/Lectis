import styles from './audio-player.module.scss'
import { useState } from 'react'

export default function AudioPlayer({ audio, pausar }) {

  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if(!prevValue) {
      audioPlayer.current.play()
      animationRef.current = requestAnimationFrame(whilePlaying)
    } else{
      audioPlayer.current.pause()
      cancelAnimationFrame(animationRef.current)
    }
  }

  if (pausar && isPlaying){
    togglePlayPause()
  }

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime
    changePlayerCurrentTime()
    animationRef.current = requestAnimationFrame(whilePlaying)
  }

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime()
  }

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty('--seek-before-width', 
    `${progressBar.current.value / duration * 100}%`)
    setCurrentTime(progressBar.current.value)
  }

  const backTen = () => {
    progressBar.current.value = Number(progressBar.current.value) - 10;
    changeRange();
  }

  const forwardTen = () => {
    progressBar.current.value = Number(progressBar.current.value) + 10;
    changeRange();
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

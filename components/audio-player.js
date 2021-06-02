import styles from './audio-player.module.scss'
import utils from '../styles/utils.module.css'
import { useState, useRef, useEffect } from 'react'

export default function AudioPlayer({ audio, pausar }) {

  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  const audioPlayer = useRef()
  const progressBar = useRef()
  const animationRef = useRef();

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration)
    setDuration(seconds)
    progressBar.current.max = seconds
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState])

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs/60)
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`
    const seconds = Math.floor(secs%60);
    const returnedSeconds = seconds<10 ? `0${seconds}` : `${seconds}`

    return `${returnedMinutes}:${returnedSeconds}`
  }

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

  if (pausar && isPlaying) {
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
      <audio preload="metadata" ref={audioPlayer} onLoadedMetadata={changePlayerCurrentTime}> 
        <source src={'https:' + audio.fields.file.url } type="audio/mp3" codecs="mp3" />
      </audio>

      <div className={styles.progressbar_wrapper}>
        <input type="range" className={styles.progressbar} defaultValue='0' ref={progressBar} onChange={changeRange}/>
      </div>

      <div className={styles.buttons_wrapper}>
        <span className={utils.small_regular}>{calculateTime(currentTime)}</span>
        <div className={styles.buttons}>
          <button className={styles.button_steps} onClick={backTen}>
            <img src="/assets/back 10.svg"/>
          </button>
          <div className={styles.playpause_wrapper}>
            <button onClick={togglePlayPause} className={styles.play_pause_btn} onTouchStart="">
              <img src={ '/assets/' + (isPlaying ? 'pause' : 'play') + '.svg'  } alt="bot"/>
            </button>
          </div>
          <button className={styles.button_steps} onClick={forwardTen}>
            <img src="/assets/forward 10.svg"/>
          </button>
        </div>
        <span className={utils.small_regular}>{((duration && !isNaN(duration)) ? calculateTime(duration) : '')}</span>
      </div>

      
    </div>
  )
}

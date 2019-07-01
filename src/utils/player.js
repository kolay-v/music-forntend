import store from './store'
import playNext from '../actions/next-track'
import updateTime from '../actions/update-time'
import changePauseState from '../actions/change-pause-state'
const { dispatch } = store

class Player {
  audio = new Audio()

  constructor () {
    this.audio.volume = 0.5
    this.audio.addEventListener('ended', () => dispatch(playNext()))
    this.audio.addEventListener('timeupdate', () => dispatch(updateTime(this.audio.currentTime)))
    this.audio.addEventListener('pause', () => dispatch(changePauseState(true)))
    this.audio.addEventListener('play', () => dispatch(changePauseState(false)))
  }

  playTrack (src) {
    this.audio.src = src
    this.audio.load()
    this.audio.play()
  }

  pause () {
    this.audio.pause()
  }

  unpause () {
    this.audio.play()
  }

  seek (time) {
    this.audio.currentTime = time
  }
}

export default new Player()

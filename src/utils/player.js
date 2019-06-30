import store from './store'
import playNext from '../actions/next-track'
import updateTime from '../actions/update-time'
const { dispatch } = store

class Player {
  audio = new Audio()

  constructor () {
    this.audio.volume = 0.5
    this.audio.addEventListener('ended', () => dispatch(playNext()))
    this.audio.addEventListener('timeupdate', () => dispatch(updateTime(this.audio.currentTime)))
  }

  playTrack (src) {
    this.audio.src = src
    this.audio.load()
    this.audio.play()
  }
}

export default new Player()

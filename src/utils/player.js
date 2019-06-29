import store from './store'
import playNext from '../actions/next-track'
const { dispatch } = store

class Player {
  audio = new Audio()

  constructor () {
    this.audio.addEventListener('ended', () => dispatch(playNext()))
    // this.audio.addEventListener('timeupdate', () => console.log(this.audio.currentTime))
  }

  playTrack (src) {
    this.audio.src = src
    this.audio.load()
    this.audio.play()
  }
}

export default new Player()

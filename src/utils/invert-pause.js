import player from './player'

export default pause => pause
  ? player.unpause()
  : player.pause()

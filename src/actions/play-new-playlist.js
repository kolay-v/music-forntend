import player from '../utils/player'

export default (playlist, index) => dispatch => {
  player.playTrack(playlist[index].url)
  dispatch({ type: 'NEW_PLAYLIST', playlist, index })
}

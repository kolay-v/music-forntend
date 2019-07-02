import player from '../utils/player'

export default (playlist, index) => dispatch => {
  dispatch({ type: 'NEW_PLAYLIST', playlist })
  dispatch({ type: 'CHANGE_INDEX', index })
  dispatch({ type: 'CHANGE_PAUSE_STATE', pause: false })
  player.playTrack(playlist[index].url)
}

import player from '../utils/player'

export default () => (dispatch, getState) => {
  dispatch({ type: 'PLAY_NEXT' })
  const { playlist, index } = getState().player
  const { url } = playlist[index]
  player.playTrack(url)
}

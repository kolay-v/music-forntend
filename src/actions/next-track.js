import player from '../utils/player'

export default (back = false) => (dispatch, getState) => {
  /*
  if (state.index === null) return state
    let index = state.index + 1
    const { playlist } = state
    if (index >= playlist.length) {
      index = state.repeat ? 0 : null
    }
     if (action.type === 'PLAY_BACK') {
    if (state.index === null) return state
    if (state.index === 0) {
      return { ...state, time: 0 }
    }
    return {
      ...state,
      index: state.index - 1,
      time: 0
    }

  */
  const { playlist, index } = getState().player
  if (index === null) return
  const newIndex = index + (back ? -1 : 1)
  dispatch({ type: 'NEW_TIME', time: 0 })
  if (newIndex >= playlist.length) {
    dispatch({ type: 'CHANGE_INDEX', index: null })
    return dispatch({ type: 'CHANGE_PAUSE_STATE', pause: true })
  }
  dispatch({ type: 'CHANGE_INDEX', index: newIndex })
  dispatch({ type: 'CHANGE_PAUSE_STATE', pause: false })
  const { url } = playlist[newIndex]
  player.playTrack(url)
}

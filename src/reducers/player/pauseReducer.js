export default (state = true, action) => {
  if (action.type === 'CHANGE_PAUSE_STATE') {
    return action.pause
  }
  return state
}

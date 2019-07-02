export default (state = null, action) => {
  if (action.type === 'CHANGE_INDEX') {
    return action.index
  }
  return state
}

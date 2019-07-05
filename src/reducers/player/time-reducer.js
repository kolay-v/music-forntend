export default (state = 0, action) => {
  if (action.type === 'NEW_TIME') {
    return action.time
  }
  return state
}

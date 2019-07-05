export default (state = [], action) => {
  if (action.type === 'NEW_PLAYLIST') {
    return [ ...action.playlist ]
  } if (action.type === 'LOAD_TO_PLAYLIST') {
    return [ ...state, ...action.tracks ]
  }
  return state
}

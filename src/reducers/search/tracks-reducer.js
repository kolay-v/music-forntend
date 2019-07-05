export default (state = { '': [] }, action) => {
  switch (action.type) {
    case 'NEW_SEARCH_RESULT': {
      const tracks = { ...state }
      tracks[action.q] = action.result
      return tracks
    }
    case 'LOADED_MORE': {
      const tracks = { ...state }
      tracks[action.q] = [ ...tracks[action.q], ...action.result ]
      return tracks
    }
    default:
      return state
  }
}

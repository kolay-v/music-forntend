const defaultState = {
  loading: 'loaded',
  q: '',
  tracks: { '': [] }
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'START_LOAD': {
      const newState = { ...state }
      newState.q = action.q
      newState.loading = 'loading'
      return newState
    }
    case 'LOAD_END': {
      const loading = action.error ? 'error' : 'loaded'
      return { ...state, loading }
    }
    case 'NEW_SEARCH_RESULT': {
      const tracks = { ...state.tracks }
      tracks[action.q] = action.result
      return { ...state, tracks }
    }
    case 'LOADED_MORE': {
      const tracks = { ...state.tracks }
      tracks[state.q] = [ ...tracks[state.q], ...action.result ]
      return { ...state, tracks }
    }
    default:
      return state
  }
}

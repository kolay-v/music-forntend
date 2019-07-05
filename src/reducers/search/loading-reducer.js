export default (state = 'loaded', action) => {
  switch (action.type) {
    case 'START_LOAD':
      return 'loading'
    case 'LOAD_END':
      return action.error ? 'error' : 'loaded'
    default:
      return state
  }
}

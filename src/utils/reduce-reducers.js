export default (...reducers) => (state, action) => {
  reducers.forEach(reducer => { state = { ...state, ...reducer(state, action) } })
  return state
}

export default (state = '', action) => {
  if (action.type === 'CHANGE_QUERY') return action.q
  return state
}

export default (q, more = false) => (dispatch, getState) => {
  const state = getState()
  const { tracks } = state.search
  if (q === null) q = state.search.q
  else dispatch({ type: 'CHANGE_QUERY', q })
  dispatch({ type: 'START_LOAD' })
  const oldTracks = tracks[q]
  if (oldTracks && !more) return dispatch({ type: 'LOAD_END', error: false })
  const offset = Number(more && oldTracks && oldTracks.length)
  console.log(process.env)
  const url = new URL(process.env.REACT_APP_TRACK_URL)
  url.search = new URLSearchParams({
    q, count: 20, offset
  }).toString()
  return fetch(url.toString(), { method: 'GET' }).then(r => {
    if (r.ok) return r.json()
    throw new Error('Error while fetching tracks')
  }).then(result => {
    const type = offset ? 'LOADED_MORE' : 'NEW_SEARCH_RESULT'
    dispatch({ type, result, q })
    return getState().search.q === q ? false : null
  })
    .catch(e => console.error(e) || true)
    .then(error => error !== null &&
      dispatch({ type: 'LOAD_END', error }))
}

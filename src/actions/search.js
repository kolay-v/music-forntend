export default (q, more = false) => (dispatch, getState) => {
  let state = getState()
  const { tracks } = state.search
  if (!q) q = state.search.q
  dispatch({ type: 'START_LOAD', q })
  const oldTracks = tracks[q]
  if (oldTracks && !more) return dispatch({ type: 'LOAD_END', error: false })
  let offset = Number(more && oldTracks && oldTracks.length)
  const url = new URL('https://vk.e-toolz.cf/vk/search')
  url.search = new URLSearchParams({
    q, count: 2, offset
  })
  fetch(url, { method: 'GET' }).then(r => {
    if (r.ok) return r.json()
    throw new Error('Error while fetching tracks')
  }).then(result => {
    const type = offset ? 'LOADED_MORE' : 'NEW_SEARCH_RESULT'
    dispatch({ type, result, q })
    return getState().search.q === q ? false : null
  })
    .catch(() => console.error || true)
    .then(error => error !== null &&
      dispatch({ type: 'LOAD_END', error }))
}

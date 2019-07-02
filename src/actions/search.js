export default q => (dispatch, getState) => {
  dispatch({ type: 'START_LOAD', q })
  const url = new URL('https://vk.e-toolz.cf/vk/search')
  url.search = new URLSearchParams({
    q, count: 2, offset: 0
  })
  fetch(url, { method: 'GET' }).then(r => {
    if (r.ok) return r.json()
    throw new Error('aa')
  }).then(result => {
    if (getState().search.q === q) {
      dispatch({ type: 'NEW_SEARCH_RESULT', result })
      return false
    }
    return null
  })
    .catch(() => console.error || true)
    .then(error => error !== null &&
			dispatch({ type: 'LOAD_END', error }))
}

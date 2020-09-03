export default (playlist, index) => {
  const current = playlist[index]
  return current || {
    duration: 0,
    id: null,
    title: '',
    artist: '',
    url: ''
  }
}

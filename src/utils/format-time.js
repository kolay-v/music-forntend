const formatTime = seconds => {
  seconds = Math.floor(seconds)
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds - (h * 3600)) / 60)
  const s = seconds - (h * 3600) - (m * 60)
  return `${h ? `${h}:` : ''}${h && m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`
}

export default formatTime

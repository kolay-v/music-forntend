import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Progress from '@material-ui/core/CircularProgress'
import playTrack from '../actions/play-new-playlist'
import List from '@material-ui/core/List'
import Item from '@material-ui/core/ListItem'

export default () => {
  const dispatch = useDispatch()
  const tracks = useSelector(state => state.search.tracks)
  const loading = useSelector(state => state.search.loading)
  const playingIndex = useSelector(state => state.player.index)
  if (loading === 'errpr') return <p>Error</p>
  if (loading === 'loading') return <Progress />
  return <List> {
    tracks.map(({ id, url, title }, i) =>
      <Item style={i === playingIndex ? { color: 'blue' } : {}} onClick={() => dispatch(playTrack(tracks, i))} key={id}>{ title }</Item>)
  } </List>
}

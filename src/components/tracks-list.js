import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Progress from '@material-ui/core/CircularProgress'
import playTrack from '../actions/play-new-playlist'
import List from '@material-ui/core/List'
import Item from '@material-ui/core/ListItem'
import Track from './track'

export default () => {
  const dispatch = useDispatch()
  const tracks = useSelector(state => state.search.tracks)
  const loading = useSelector(state => state.search.loading)
  const playingIndex = useSelector(state => state.player.index)
  const currentTrack = useSelector(state => state.player.playlist)[playingIndex]
  if (loading === 'errpr') return <p>Error</p>
  if (loading === 'loading') return <Progress />
  return (
    <List> {
      tracks.map((track, i) => {
        const current = currentTrack && currentTrack.id === track.id
        return (
          <Track
            onPlay={() => dispatch(playTrack(tracks, i))}
            current={current}
            track={track}
          />
        )
      })
    } </List>
  )
}

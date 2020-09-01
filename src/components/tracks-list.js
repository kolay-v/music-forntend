import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Progress from '@material-ui/core/CircularProgress'
import playTrack from '../actions/play-new-playlist'
import List from '@material-ui/core/List'
import Track from './track'

export default () => {
  const dispatch = useDispatch()
  const tracks = useSelector(state => state.search.tracks[state.search.q] || [])
  const loading = useSelector(state => state.search.loading)
  const playingIndex = useSelector(state => state.player.index)
  const currentTrack = useSelector(state => state.player.playlist)[playingIndex]
  if (loading === 'error') return <p>Error</p>
  return (
    <>
      <List component='div'> {
        tracks.map((track, i) => {
          const { id } = track
          const current = currentTrack && currentTrack.id === id
          return (
            <Track
              key={id}
              onPlay={() => dispatch(playTrack(tracks, i))}
              current={Boolean(current)}
              track={track}
            />
          )
        })
      }
      </List>
      {loading === 'loading' && <Progress />}
    </>
  )
}

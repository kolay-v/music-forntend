import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import getCurrentTrack from '../utils/get-current-track'
import Slider from '@material-ui/core/Slider'
import seek from '../actions/seek'

export default () => {
  const dispatch = useDispatch()
  const time = Math.floor(useSelector(state => state.player.time))
  const pause = useSelector(state => state.player.pause)
  const index = useSelector(state => state.player.index)
  const track = getCurrentTrack(...useSelector(({ player }) => [player.playlist, player.index]))

  return (
    <>
      <Slider
        min={0} max={track.duration}
        value={time}
        disabled={index === null}
        onChange={(_, newValue) => dispatch(seek(newValue))}
      />
      <p>{ pause ? 'pause' : 'playing' }</p>
    </>
  )
}

import React from 'react'
import { useSelector/*, useDispatch */ } from 'react-redux'
import getCurrentTrack from '../utils/get-current-track'
import Slider from '@material-ui/lab/Slider'

export default () => {
  const time = Math.floor(useSelector(state => state.player.time))
  const track = getCurrentTrack(...useSelector(({ player }) => [player.playlist, player.index]))
  return (
    <Slider min={0} max={track.duration} value={time} />
  )
}

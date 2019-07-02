import React from 'react'
import { useSelector } from 'react-redux'
import invertPause from '../utils/invert-pause'
import Item from '@material-ui/core/ListItem'
import ItemAction from '@material-ui/core/ListItemSecondaryAction'
// import ItemAvatar from '@material-ui/core/ListItemAvatar'
import ItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'
import PropTypes from 'prop-types'

const Track = ({ track, onPlay, current }) => {
  const pause = useSelector(state => state.player.pause)
  const onPauseChange = () => invertPause(pause)
  return (
    <Item
      button={!(current && !pause)}
      onClick={current ? onPauseChange : onPlay}
    >
      <ItemText>{ track.title }</ItemText>
      <ItemAction>
        <IconButton>
          a
        </IconButton>
      </ItemAction>
    </Item>
  )
}

Track.propTypes = {
  track: PropTypes.object.isRequired,
  current: PropTypes.bool.isRequired,
  onPlay: PropTypes.func.isRequired
}

export default Track

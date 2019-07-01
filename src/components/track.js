import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import invertPause from '../utils/invert-pause'
import Item from '@material-ui/core/ListItem'
import ItemAction from '@material-ui/core/ListItemSecondaryAction'
// import ItemAvatar from '@material-ui/core/ListItemAvatar'
import ItemText from '@material-ui/core/ListItemText'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import PropTypes from 'prop-types'

const Track = ({ track, onPlay, current }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = !!anchorEl
  const pause = useSelector(state => state.player.pause)
  const onPauseChange = () => invertPause(pause)
  return (
    <>
      <Item
        button={!(current && !pause)}
        onClick={current ? onPauseChange : onPlay}
      >
        <ItemText>{ track.title }</ItemText>
        <ItemAction>
          <IconButton onClick={e => setAnchorEl(e.target)}>
            <MoreVertIcon />
          </IconButton>
        </ItemAction>
      </Item>
      <Menu
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
      >
        hi
      </Menu>
    </>
  )
}

Track.propTypes = {
  track: PropTypes.object.isRequired,
  current: PropTypes.bool.isRequired,
  onPlay: PropTypes.func.isRequired
}

export default Track
/*
        <Item style={current ? { color: 'blue' } : {}}
          onClick={}
          key={id}>{ artist } - { title }
        </Item> */

import React from 'react'
import { useSelector } from 'react-redux'
import invertPause from '../utils/invert-pause'
import Item from '@material-ui/core/ListItem'
import ItemAction from '@material-ui/core/ListItemSecondaryAction'
// import ItemAvatar from '@material-ui/core/ListItemAvatar'
import ItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import PropTypes from 'prop-types'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

const Track = ({ track, onPlay, current }) => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const menuOpen = Boolean(anchorEl)
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  const pause = useSelector(state => state.player.pause)
  const onPauseChange = () => invertPause(pause)
  return (
    <>
      <Item
        button={!(current && !pause)}
        onClick={current ? onPauseChange : onPlay}
      >
        <ItemText style={{ color: current ? 'blue' : 'black' }}>{track.artist} - {track.title}</ItemText>
        <ItemAction>
          {/**/}
          <IconButton onClick={handleClick}>
            <MoreVertIcon />
          </IconButton>
          {/* </a> */}
        </ItemAction>
      </Item>
      <Menu
        anchorEl={anchorEl}
        onClose={handleClose}
        open={menuOpen}
      >
        <a href={track.url} download={`${track.artist} - ${track.title}`}>

          <MenuItem>
            Download
          </MenuItem>
        </a>

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

import React, { useState } from 'react'
import Item from '@material-ui/core/ListItem'
import ItemAction from '@material-ui/core/ListItemSecondaryAction'
// import ItemAvatar from '@material-ui/core/ListItemAvatar'
import ItemText from '@material-ui/core/ListItemText'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'

export default ({ track, onPlay, current }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = !!anchorEl
  return (
    <Item button={!current} onClick={onPlay}>
      <ItemText>{ track.title }</ItemText>
      <ItemAction>
        <IconButton onClick={e => setAnchorEl(e.target)}>
          <MoreVertIcon />
        </IconButton>
      </ItemAction>
      <Menu
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
      >
        hi
      </Menu>
    </Item>
  )
}
/*
        <Item style={current ? { color: 'blue' } : {}}
          onClick={}
          key={id}>{ artist } - { title }
        </Item> */

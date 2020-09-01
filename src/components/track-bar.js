import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import getCurrentTrack from '../utils/get-current-track'
import { makeStyles } from '@material-ui/core/styles'
import {
  IconButton,
  Paper, Grid, Slider,
  Typography, useMediaQuery
} from '@material-ui/core'
import Pause from '@material-ui/icons/Pause'
import Next from '@material-ui/icons/SkipNext'
import Prev from '@material-ui/icons/SkipPrevious'
import Play from '@material-ui/icons/PlayArrow'
import seek from '../actions/seek'
import nextTrack from '../actions/next-track'
import invertPause from '../utils/invert-pause'
import PropTypes from 'prop-types'
import formatTime from '../utils/format-time'

const SongName = ({ track, time }) => {
  return (
    <Grid item>
      <Typography>{track.artist} - {track.title}</Typography>
      <Typography>{formatTime(time)} / {formatTime(track.duration)}</Typography>
    </Grid>
  )
}

SongName.propTypes = {
  track: PropTypes.object.isRequired,
  time: PropTypes.number.isRequired
}

export default () => {
  const doubleSizePanel = useMediaQuery('(max-width: 640px)')
  const classes = makeStyles({
    bar: {
      position: 'fixed',
      bottom: 0,
      width: '100%',
      height: doubleSizePanel ? '96px' : '48px',
      zIndex: 2
    },
    cont: {
      height: '48px'
    }
  })()
  const dispatch = useDispatch()
  const { time, index, pause } = useSelector(({ player }) => player)
  const track = getCurrentTrack(...useSelector(({ player }) => [player.playlist, player.index]))

  return (
    <Paper className={classes.bar} elevation={4} variant='outlined'>
      <Grid container direction='column'>
        {
          doubleSizePanel && <SongName track={track} time={time} />
        }
        <Grid item className={classes.cont}>
          <Grid container spacing={2} justify='space-around' alignItems='center'>
            <Grid item />
            {
              doubleSizePanel || <SongName track={track} time={time} />
            }
            <Grid item xs>
              <Slider
                min={0} max={track.duration}
                value={time}
                disabled={index === null}
                onChange={(_, newValue) => dispatch(seek(newValue))}
                valueLabelDisplay='auto'
                valueLabelFormat={x => Math.floor(x).toString()}
              />
            </Grid>
            <Grid item>
              <IconButton
                onClick={() => time > 1 ? dispatch(seek(0)) : dispatch(nextTrack(true))}
                disabled={index === null}
              ><Prev />
              </IconButton>
              <IconButton
                onClick={() => index !== null && invertPause(pause)}
                disabled={index === null}
              >{pause ? <Play /> : <Pause />}
              </IconButton>
              <IconButton
                onClick={() => dispatch(nextTrack())}
                disabled={index === null}
              ><Next />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

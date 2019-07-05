import { combineReducers } from 'redux'
import time from './time-reducer'
import index from './index-reducer'
import playlist from './playlist-reducer'
import pause from './pause-reducer'

export default combineReducers({
  time, index, playlist, pause
})

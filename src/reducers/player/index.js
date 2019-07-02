import { combineReducers } from 'redux'
import time from './timeReducer'
import index from './indexReducer'
import playlist from './playlistReducer'
import pause from './pauseReducer'

export default combineReducers({
  time, index, playlist, pause
})

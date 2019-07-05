import { combineReducers } from 'redux'
import tracks from './tracks-reducer'
import loading from './loading-reducer'
import q from './query-reducer'

export default combineReducers({ tracks, loading, q })

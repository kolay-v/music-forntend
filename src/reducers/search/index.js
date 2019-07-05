import { combineReducers } from 'redux'
import tracks from './tracks-reducer'
import reduceReducers from '../../utils/reduce-reducers'

const defaultState = {
  loading: 'loaded',
  q: ''
}

export default reduceReducers(
  combineReducers({ tracks }),
  (state = defaultState, action) => {
    switch (action.type) {
      case 'START_LOAD': {
        const newState = { ...state }
        newState.q = action.q
        newState.loading = 'loading'
        return newState
      }
      case 'LOAD_END': {
        const loading = action.error ? 'error' : 'loaded'
        return { ...state, loading }
      }
      default:
        return state
    }
  }
)

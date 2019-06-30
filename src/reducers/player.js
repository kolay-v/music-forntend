// import { combineReducers } from 'redux'

const defaultState = {
  playlist: [],
  index: null,
  repeat: false,
  time: 0,
  pause: true
}

// export default combineReducers({})
export default (state = defaultState, action) => {
  if (action.type === 'NEW_PLAYLIST') {
    return {
      ...state,
      index: action.index,
      playlist: action.playlist
    }
  } if (action.type === 'PLAY_NEXT') {
    if (state.index === null) return state
    let index = state.index + 1
    const { playlist } = state
    if (index >= playlist.length) {
      index = state.repeat ? 0 : null
    }
    return { ...state, index }
  } if (action.type === 'NEW_TIME') {
    return { ...state, time: action.time }
  } if (action.type === 'PLAY_BACK') {
    if (state.index === null) return state
    if (state.index === 0) {
      return { ...state, time: 0 }
    }
    return {
      ...state,
      index: state.index - 1,
      time: 0
    }
  } if (action.type === 'CHANGE_INDEX') {
    const { index } = action
    return {
      ...state,
      index,
      pause: false,
      time: 0
    }
  }
  return state
}

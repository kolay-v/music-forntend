
export default (pause) => (dispatch, getState) =>
  dispatch({
    type: 'CHANGE_PAUSE_STATE',
    pause: getState().player.index !== null && pause
  })

import player from '../utils/player'
import updateTime from './update-time'

export default time => dispatch => {
  player.seek(time)
  dispatch(updateTime(time))
}

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import search from '../actions/search'
import TracksList from '../components/tracks-list'
import TextField from '@material-ui/core/TextField'

export default () => {
  const dispatch = useDispatch()
  const q = useSelector(state => state.search.q)
  const loading = useSelector(state => state.search.loading)
  return (
    <>
      <TextField value={q} onChange={e => dispatch(search(e.target.value))} label='Track name' />
      <TracksList />
      {
        loading === 'loaded' && <button onClick={() => dispatch(search(null, true))}>more</button>
      }
    </>
  )
}

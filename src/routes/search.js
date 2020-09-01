import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import search from '../actions/search'
import TracksList from '../components/tracks-list'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

export default () => {
  const dispatch = useDispatch()
  const q = useSelector(state => state.search.q)
  const loading = useSelector(state => state.search.loading)
  return (
    <>
      <TextField value={q} onChange={e => dispatch(search(e.target.value))} label='Track name' />
      <TracksList />
      {
        loading === 'loaded' && <Button onClick={() => dispatch(search(null, true))}>more</Button>
      }
    </>
  )
}

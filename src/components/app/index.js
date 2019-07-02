import React from 'react'
import Search from '../../routes/search'
import TrackBar from '../track-bar'
import './app.css'

function App () {
  return (
    <div className='App'>
      <header className='App-header'>
        <TrackBar />
        <Search />
      </header>
    </div>
  )
}

export default App
import React from 'react'
import Search from '../../routes/search'
import TrackBar from '../track-bar'
import { version } from '../../package.alias.json'
import './app.css'

function App () {
  return (
    <div className='App'>
      <header className='App-header'>
        <TrackBar />
        <Search />
        <p>Version {version}</p>
      </header>
    </div>
  )
}

export default App

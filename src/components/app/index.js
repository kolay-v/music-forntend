import React from 'react'
import Search from '../../routes/search'
import TrackBar from '../track-bar'
import { version } from '../../package.alias.json'
import store from '../../utils/store'
import { Provider } from 'react-redux'
import './app.css'

function App () {
  return (
    <Provider store={store}>
      <div className='App'>
        <header className='App-header'>
          <TrackBar />
          <Search />
          <p>Version {version}</p>
        </header>
      </div>
    </Provider>
  )
}

export default App

import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import search from './search'

describe('test search dispatcher', () => {
  const mockStore = configureStore([thunk])

  afterEach(() => {
    fetch.resetMocks()
  })
  it('dispatch start loading and change query', () => {
    fetch.mockResponse(JSON.stringify([]))
    const store = mockStore({ search: { q: 'a', tracks: [] } })
    const q = 'test'
    store.dispatch(search(q))
      .then(() => {
        expect(store.getActions()[1]).toEqual({ type: 'START_LOAD' })
        expect(store.getActions()[0]).toEqual({ type: 'CHANGE_QUERY', q })
      })
  })
})

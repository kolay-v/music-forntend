import playlist from './playlist-reducer'

it('reduce playlist actions fine', () => {
  expect(playlist(undefined, { type: '' })).toEqual([])
  expect(playlist(['b'], { type: 'LOAD_TO_PLAYLIST', tracks: ['a'] })).toEqual(['b', 'a'])
  expect(playlist(['a'], { type: 'NEW_PLAYLIST', playlist: ['b'] })).toEqual(['b'])
})

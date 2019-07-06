import query from './query-reducer'

it('change time without errors', () => {
  expect(query(undefined, { type: '' })).toEqual('')
  const q = 'hello from test'
  expect(query('bey', { type: 'CHANGE_QUERY', q })).toEqual(q)
})

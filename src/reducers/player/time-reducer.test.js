import time from './time-reducer'

it('change time without errors', () => {
  expect(time(undefined, { type: '' })).toEqual(0)
  expect(time(3, { type: 'NEW_TIME', time: 10 })).toEqual(10)
})

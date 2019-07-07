import { isVisible } from './lazy-load'

it('test isVisible function', () => {
  global.window.innerHeight = 1000
  expect(isVisible({
    getBoundingClientRect: () => ({
      top: 2000,
      height: 100
    })
  })).toEqual(false)
  expect(isVisible({
    getBoundingClientRect: () => ({
      top: -101,
      height: 100
    })
  })).toEqual(false)
  expect(isVisible({
    getBoundingClientRect: () => ({
      top: 999,
      height: 100
    })
  })).toEqual(true)
})

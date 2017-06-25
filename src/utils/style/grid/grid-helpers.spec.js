import { calcValue, newBlock } from './grid-helpers'

describe('grid-helpers', () => {

  describe('calcValue', () => {
    it('calculates a value', () => {
      const result = calcValue('1/2', '32px', 99.9, '%')
      expect(result).toMatchSnapshot()
    })
  })

  describe('newBlock', () => {
    it('returns css when called without child node', () => {
      const result = newBlock({'margin-left': '10px'})
      expect(result).toMatchSnapshot()
    })
  })

})

import { gridWrapper, gridColumn } from './grid'

describe('grid', () => {

  describe('gridWrapper', () => {
    it('by default returns a tagged template literal that sets default styling for a GridWrapper element', () => {
      const result = gridWrapper()
      expect(result).toMatchSnapshot()
    })
    it('sets the direction to column when column is passed as first argument', () => {
      const result = gridWrapper('column', 'wrap')
      expect(result).toMatchSnapshot()
    })
    it('turns of wrap when nowrap is passed as second argument', () => {
      const result = gridWrapper('row', 'nowrap')
      expect(result).toMatchSnapshot()
    })
    it('sets a left and right padding when a pixel value is provided as a third argument', () => {
      const result = gridWrapper('row', 'wrap', '16px')
      expect(result).toMatchSnapshot()
    })
  })

  describe('gridColumn', () => {
    it('sets a width that is the same as the fraction passed as the first argument', () => {
      const result = gridColumn('1/3')
      expect(result).toMatchSnapshot()
    })
    it('sets a gutter when the default value is overwritten by the invocation of the function', () => {
      const result = gridColumn('1/4 16px')
      expect(result).toMatchSnapshot()
    })
    it('gives the the element a display of flex when flex is passed as the third argument', () => {
      const result = gridColumn('1/2 32px flex')
      expect(result).toMatchSnapshot()
    })
    it('gives the the element a display of noflex when noflex is passed as the third argument', () => {
      const result = gridColumn('1/2 32px noflex')
      expect(result).toMatchSnapshot()
    })
  })

})

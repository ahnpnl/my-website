import CustomPropTypes from './CustomPropTypes'

describe('The CustomPropTypes', () => {
  describe('url PropType', () => {

    const validUrls = [
      'http://example.com',
      'https://example.com',
      'http://example.com/test.jpg'
    ]

    const invalidurls = [
      'example.com',
      'asdf',
      'test@example.com'
    ]

    const checkUrl = function (url) {
      CustomPropTypes.url({ 'url': url }, 'url', 'SomeComponent')
    }

    validUrls.forEach(url => {
      it('accepts valid urls', () => {
        checkUrl(url)
      })
    })

    invalidurls.forEach(url => {
      it('rejects invalid urls', () => {
        expect(() => checkUrl(url)).toThrowError()
      })
    })

    it('accepts no value if not required', () => {
      checkUrl()
    })

    it('rejects urls with type other than string', () => {
      expect(() => checkUrl({ url: 'irrelevant' })).toThrowError()
    })

    it('reject required but missing urls', () => {
      expect(
        () => CustomPropTypes.url.isRequired({ 'url': undefined }, 'url', 'SomeComponent')
      ).toThrowError()
    })
  })

  describe('array PropType', () => {
      function checkArray(array, size) {
        CustomPropTypes.array(size)({'array': array}, 'array', 'SomeComponent')
    }

      it('accepts missing array if not required', () => {
          checkArray(null)
      })

      it('rejects non-arrays', () => {
          expect(
            () => checkArray('not an array')
          ).toThrowError()
      })

      it('reject required but missing arrays', () => {
          expect(
            () => CustomPropTypes.array().isRequired({'array': null}, 'array', 'SomeComponent')
          ).toThrowError()
      })

      it('rejects wrong array size', () => {
        expect(
          () => CustomPropTypes.array(1).isRequired({'array': []}, 'array', 'SomeComponent')
        ).toThrowError()
      });
  });
})

import * as DeviceInfoModule from './deviceInfo'
import * as constants from './deviceInfo/constants'

describe('deviceInfo', () => {
  describe('reducer', () => {
    it('returns the current state when called with an unknown action', () => {
      const state = {}
      expect(DeviceInfoModule.default(state, { type: 'UNKNOWN_ACTION' })).toBe(state)
    })

    it('returns the device info when called with the UPDATE action', () => {
      const payload = {}
      const action = {
        type: DeviceInfoModule.UPDATE,
        payload,
      }

      expect(DeviceInfoModule.default(undefined, action)).toBe(payload)
    })
  })

  describe('action creators', () => {
    describe('triggerUpdate', () => {
      it('retrieves the device info and triggers an update in the state', () => {
        const result = DeviceInfoModule.triggerUpdate()

        expect(result.type).toBe(DeviceInfoModule.UPDATE)

        // FIXME: At this time it's not clear how to mock the user agent, but we will always get something in the following format:
        // expect(result.payload.userAgent).toMatch(/^Node\.js \(.*\) AppleWebKit\/\d+\.\d+ \(KHTML, like Gecko\)$/)
      })

      const testCases = [
        {
          title: 'recognizes 400x300 as SMALL and LANDSCAPE',
          width: 400,
          height: 300,
          expectedOrientation: constants.ORIENTATION_LANDSCAPE,
          expectedDeviceType: constants.DEVICE_SMALL
        }, {
          title: 'recognizes 300x400 as SMALL and PORTRAIT',
          width: 300,
          height: 400,
          expectedOrientation: constants.ORIENTATION_PORTRAIT,
          expectedDeviceType: constants.DEVICE_SMALL
        }, {
          title: 'recognizes 800x600 as MEDIUM and LANDSCAPE',
          width: 800,
          height: 600,
          expectedOrientation: constants.ORIENTATION_LANDSCAPE,
          expectedDeviceType: constants.DEVICE_MEDIUM
        }, {
          title: 'recognizes 1920x1200 as XLARGE and LANDSCAPE',
          width: 1920,
          height: 1200,
          expectedOrientation: constants.ORIENTATION_LANDSCAPE,
          expectedDeviceType: constants.DEVICE_XLARGE
        }, {
          title: 'recognizes 767x400 as SMALL and LANDSCAPE',
          width: 767,
          height: 400,
          expectedOrientation: constants.ORIENTATION_LANDSCAPE,
          expectedDeviceType: constants.DEVICE_SMALL
        }, {
          title: 'recognizes 768x400 as MEDIUM and LANDSCAPE',
          width: 768,
          height: 400,
          expectedOrientation: constants.ORIENTATION_LANDSCAPE,
          expectedDeviceType: constants.DEVICE_MEDIUM
        }, {
          title: 'recognizes 1023x400 as MEDIUM and LANDSCAPE',
          width: 1023,
          height: 400,
          expectedOrientation: constants.ORIENTATION_LANDSCAPE,
          expectedDeviceType: constants.DEVICE_MEDIUM
        }, {
          title: 'recognizes 1024x400 as LARGE and LANDSCAPE',
          width: 1024,
          height: 400,
          expectedOrientation: constants.ORIENTATION_LANDSCAPE,
          expectedDeviceType: constants.DEVICE_LARGE
        },
      ]

      testCases.forEach(testCase => {
        it(testCase.title, () => {
          window.innerWidth = testCase.width
          window.innerHeight = testCase.height

          const result = DeviceInfoModule.triggerUpdate()

          expect(result.payload.width).toBe(testCase.width)
          expect(result.payload.height).toBe(testCase.height)
          expect(result.payload.orientation).toBe(testCase.expectedOrientation)
          expect(result.payload.deviceType).toBe(testCase.expectedDeviceType)
        })
      })
    })
  })
})

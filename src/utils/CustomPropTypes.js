// @flow

const CustomPropTypes = {}

/**
 * This is a simple validator for urls which works with prop-types. It supports the .isRequired post-fix.
 */
CustomPropTypes.url = function () {
  const urlPattern = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/

  function checker(isRequired: boolean, props: { [key: string]: ?any }, propName: string, componentName: string) {
    const value = props[propName]
    if (value || isRequired) {
      if (!value || typeof value !== 'string' || !urlPattern.test(value)) {
        throw new Error(`Invalid url passed as prop '${propName}' to component '${componentName}': '${String(value)}'`)
      }
    }
  }

  const chainedChecker = checker.bind(null, false)
  chainedChecker.isRequired = checker.bind(null, true)

  return chainedChecker
}()

CustomPropTypes.array = function (size: number) {
  function checker(isRequired: boolean, props: { [key: string]: ?any }, propName: string, componentName: string) {
    const value = props[propName]
    if (value || isRequired) {
      if(!value) {
        throw new Error(`Missing required prop: prop '${propName}' component '${componentName}'`)
      }
      if (!Array.isArray(value)) {
        throw new Error(`Prop is not an array: prop '${propName}' component '${componentName}'`)
      }
      if (value.length !== size) {
        throw new Error(`Prop doesn't have required array size: prop '${propName}' component '${componentName}': size: ${value.size()}`)
      }
    }
  }

  const chainedChecker = checker.bind(null, false)
  chainedChecker.isRequired = checker.bind(null, true)

  return chainedChecker
}

export default CustomPropTypes

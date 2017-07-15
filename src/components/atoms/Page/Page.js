// @flow

import React from 'react'

type Arguments = {
  /**
   * The elements that are shown inside the slider. Each element should be wrapped inside a SliderItem component, for alignment.
   */
  children?: React.Element<any>[],
}

/**
 * Page component to be used as wrapper for main page body, most important task to keep margin-top to leave space for sticky header
 */
const Page = ({ children }: Arguments) => (
  <div className="page">
    {children}
  </div>
)

export default Page

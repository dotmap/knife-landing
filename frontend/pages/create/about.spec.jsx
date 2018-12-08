/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'

import AboutPage from '.'

describe('About page', () => {
  it('matches snapshot', () => {
    const component = renderer.create(<AboutPage />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'

import CreatePage from '.'

describe('About page', () => {
  it('matches snapshot', () => {
    const component = renderer.create(<CreatePage />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

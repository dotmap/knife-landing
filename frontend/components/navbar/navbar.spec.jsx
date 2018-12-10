/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'

import NavBar from '.'

describe('NavBar component', () => {
  it('matches snapshot', () => {
    const component = renderer.create(<NavBar />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

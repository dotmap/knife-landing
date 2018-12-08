/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'

import Header from '.'

describe('Header component', () => {
  it('matches snapshot', () => {
    const component = renderer.create(<Header />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

/* eslint-env jest */

import handler from '.'

let req
let res

describe('Greeting handler', () => {
  beforeEach(() => {
    req = {}
    res = {
      end: jest.fn()
    }
  })

  it('returns hello world', () => {
    handler(req, res)
    expect(res.end).toBeCalledWith('Hello world!')
  })
})

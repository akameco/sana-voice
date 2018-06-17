// @flow
const m = require('.')

test('snapshot', () => {
  expect(m('unicorn')).toMatchSnapshot()
})

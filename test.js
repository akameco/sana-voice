// @flow
const { findVoice } = require('.')

test('findVoice return item', () => {
  const result = findVoice('それすこすこ')
  expect(result).toMatchSnapshot()
})

// @flow
const symphogear = require('symphogear')
const VOICE_LIST /*: Array<{ title: string, link: string }> */ = require('./sana-voice-list.json')

const findVoice = (query /*: string */) =>
  VOICE_LIST.filter(voice => voice.title.includes(query))

const sanaVoice = async (query /*: ?string */) => {
  const list = query ? findVoice(query) : VOICE_LIST
  if (query && list.length === 0) {
    throw new Error(`${query} は見つかりまっせん`)
  }
  const item = list[Math.floor(Math.random() * list.length)]
  await symphogear(item.link)
  return item
}

module.exports = sanaVoice
module.exports.findVoice = findVoice

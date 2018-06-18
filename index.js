// @flow
const fs = require('fs')
const got = require('got')
const symphogear = require('symphogear')
const tempWrite = require('temp-write')
const VOICE_LIST /*: Array<{ title: string, link: string }> */ = require('./sana-voice-list.json')

const TMP_FILE = 'sana.mp3'

const findVoice = (query /*: string */) =>
  VOICE_LIST.filter(voice => voice.title.includes(query))

const sanaVoice = async (query /*: ?string */) => {
  const list = query ? findVoice(query) : VOICE_LIST
  if (query && list.length === 0) {
    throw new Error(`${query} does not match`)
  }
  const item = list[Math.floor(Math.random() * list.length)]
  const response = await got(item.link, { encoding: null })
  const filePath = tempWrite.sync(TMP_FILE)
  fs.writeFileSync(filePath, response.body)
  await symphogear(filePath)
  return item
}

module.exports = sanaVoice
module.exports.findVoice = findVoice

// @flow
const fs = require('fs')
const got = require('got')
const symphogear = require('symphogear')
const tempWrite = require('temp-write')
const voiceList = require('./sana-voice-list.json')

const TMP_FILE = 'sana.mp3'

module.exports = async (
  id /*: string */ = Math.floor(Math.random() * voiceList.length).toString()
) => {
  const response = await got(voiceList[id].link, { encoding: null })
  const filePath = tempWrite.sync(TMP_FILE)
  fs.writeFileSync(filePath, response.body)
  await symphogear(filePath)
  return voiceList[id]
}

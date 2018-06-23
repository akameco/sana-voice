// @flow
const url = require('url')
const fs = require('fs')
const got = require('got')
const cheerio = require('cheerio')

const HOST = 'http://sanabutton.ojaru.jp/'

async function fetchVoiceList() /*: Promise<Array<{title: string, link: string}>> */ {
  const { body } = await got(HOST)
  const $ = cheerio.load(body)

  // eslint-disable-next-line unicorn/prefer-spread
  return Array.from(
    $('[data-file]').map((i, el) => {
      const dataFile /*: string */ = el.attribs['data-file']
      return {
        title: dataFile.replace('./sound/', ''),
        link: `${url.resolve(HOST, encodeURIComponent(dataFile))}.mp3`,
      }
    })
  )
}

async function main() {
  const list = await fetchVoiceList()
  fs.writeFileSync(
    'sana-voice-list.json',
    JSON.stringify(list, null, 2),
    'utf8'
  )
}

main()

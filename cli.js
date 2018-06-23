#!/usr/bin/env node
// @flow
/* eslint no-console: 0 */
'use strict'
const meow = require('meow')
const sanaVoice = require('.')

const cli = meow(
  `
	Usage
	  $ sana-voice [query]

	Examples
	  $ sana-voice

	  $ sana-voice すこすこ

	  $ sana-voice --title
	  看護看護の日…とは言ったものの/アクリルフィギュア03

	  $ sana-voice --link
	  http://sanabutton.ojaru.jp/.%2Fsound%2F%E7%9C%8B%E8%AD%B7%E3%81%AE%E6%97%A5%E2%80%A6%E3%81%A8%E3%81%AF%E8%A8%80%E3%81%A3%E3%81%9F%E3%82%82%E3%81%AE%E3%81%AE%2F%E3%82%A2%E3%82%AF%E3%83%AA%E3%83%AB%E3%83%95%E3%82%A3%E3%82%AE%E3%83%A5%E3%82%A203.mp3
`,
  {
    flags: {
      title: {
        type: 'boolean',
      },
      link: {
        type: 'boolean',
      },
    },
  }
)

const { input, flags } = cli

sanaVoice(input[0])
  .then(voice => {
    if (flags.title) {
      console.log(voice.title)
    }
    if (flags.link) {
      console.log(voice.link)
    }
  })
  .catch(err => {
    console.error(err.message)
  })

#!/usr/bin/env node
// @flow
'use strict'
const meow = require('meow')
const sanaVoice = require('.')

const cli = meow(`
	Usage
	  $ sana-voice [id]

	Examples
	  $ sana-voice
	  $ sana-voice --title
	  看護看護の日…とは言ったものの/アクリルフィギュア03
	  $ sana-voice --link
	  http://sanabutton.ojaru.jp/.%2Fsound%2F%E7%9C%8B%E8%AD%B7%E3%81%AE%E6%97%A5%E2%80%A6%E3%81%A8%E3%81%AF%E8%A8%80%E3%81%A3%E3%81%9F%E3%82%82%E3%81%AE%E3%81%AE%2F%E3%82%A2%E3%82%AF%E3%83%AA%E3%83%AB%E3%83%95%E3%82%A3%E3%82%AE%E3%83%A5%E3%82%A203.mp3
`)

sanaVoice().then(voice => {
  if (cli.flags.title) {
    console.log(voice.title)
  }
  if (cli.flags.link) {
    console.log(voice.link)
  }
})

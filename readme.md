# sana-voice

[![Build Status](https://travis-ci.org/akameco/sana-voice.svg?branch=master)](https://travis-ci.org/akameco/sana-voice)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

> さなボタンから色々再生

```
$ npx sana-voice てね
$ npx sana-voice あいあい
$ npx sana-voice エッチ
```

## CLI

```
$ npm install --global sana-voice
```

```
$ sana-voice --help

	Usage
	  $ sana-voice [query]

	Examples
	  $ sana-voice

	  $ sana-voice すこすこ

	  $ sana-voice --title
	  看護看護の日…とは言ったものの/アクリルフィギュア03

	  $ sana-voice --link
	  http://sanabutton.ojaru.jp/.%2Fsound%2F%E7%9C%8B%E8%AD%B7%E3%81%AE%E6%97%A5%E2%80%A6%E3%81%A8%E3%81%AF%E8%A8%80%E3%81%A3%E3%81%9F%E3%82%82%E3%81%AE%E3%81%AE%2F%E3%82%A2%E3%82%AF%E3%83%AA%E3%83%AB%E3%83%95%E3%82%A3%E3%82%AE%E3%83%A5%E3%82%A203.mp3
```

## Install

```
$ yarn add sana-voice
```

## Usage

```js
const sanaVoice = require('sana-voice')

await sanaVoice()
//=> 🍆~~~🎤

await sanaVoice('すこすこ')
//=> すこすこ~~~🎤
```

## API

### `sanaVoice(query?: string) => Promise<{title: string,link: string}>`

#### query

Type: `string`

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars2.githubusercontent.com/u/4002137?v=4" width="100px;"/><br /><sub>akameco</sub>](http://akameco.github.io)<br />[💻](https://github.com/akameco/sana-voice/commits?author=akameco "Code") [📖](https://github.com/akameco/sana-voice/commits?author=akameco "Documentation") [⚠️](https://github.com/akameco/sana-voice/commits?author=akameco "Tests") [🚇](#infra-akameco "Infrastructure (Hosting, Build-Tools, etc)") |
| :---: |

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

## License

MIT © [akameco](http://akameco.github.io)

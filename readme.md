# left-phalange-api

> CommonJS, ESModule, INI, JSON, JSON5, TOML, YAML data loader, parser and stringifier

## Install

```sh
yarn add left-phalange-api
```

## Usage

```js
import {parse, load, stringify} from 'left-phalange-api'
```

### load(file[, options])

- file
  - Data file path to load
- options
  - Optional
  - Type `Object` | `String`
  - Default `{}`
- options(`String`)
  - `options.type`
- options.type
  - Data type of `file`
  - Should be one of `cjs`, `esm`, `ini`, `js`, `json`, `json5`, `toml`, `yaml`

examples:

```js
await load('path/to/data.json')

await load('path/to/data', 'yaml')

await load('path/to/data', {type: 'toml'})
```

### parse(string[, options])

- string
  - type: `String`
  - string to parse
- options
  - Optional
  - Type `Object` | `String`
  - Default `{}`
- options(`String`)
  - `options.type`
- options.type
  - Data type of `string`
  - Default `yaml`
  - Should be one of `ini`, `json`, `json5`, `toml`, `yaml`
- options.filename
  - Filename displayed in the error message.

examples:

```js
parse('{"left": "phalange"}')

parse('{"left": "phalange"}', 'json')

parse('left = "phalange"', {type: 'toml'})

parse('left = phalange', {filename: 'path/to/data.yml'})
```

### stringify(data[, options])

- data
  - Data to stringify
- options
  - Optional
  - Type `Object` | `String` | `Boolean`
  - Default `{}`
- options(`String`)
  - `options.type`
- options(`Boolean`)
  - `options.pretty`
- options.type
  - Data type of `string`
  - Default `json`
  - Should be one of `cjs`, `esm`, `ini`, `json`, `json5`
- options.pretty
  - Pretty output
  - Default `false`

examples:

```js
stringify({left: 'phalange'})
// {"left": "phalange"}

stringify({left: 'phalange'}, 'toml')
// left = "phalange"

stringify({left: 'phalange'}, true)
// {
//   "left": "phalange"
// }

stringify({left: 'phalange'}, {type: 'json5', pretty: true})
// {
//   left: 'phalange',
// }
```

## Related

- [left-phalange](https://github.com/fisker/left-phalange) - CLI for this module

## License

MIT © [fisker Cheung](https://github.com/fisker)

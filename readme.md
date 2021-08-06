# left-phalange-api

> YAML, TOML, JSON, JSON5, INI, CSV, ES Module, CommonJS data loader, parser and stringifier

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
  - Should be one of `cjs`, `esm`, `ini`, `js`, `json`, `json5`, `toml`, `yaml`, `csv`

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
  - Should be one of `ini`, `json`, `json5`, `toml`, `yaml`, `csv`
- options.filename
  - Filename displayed in the error message.

examples:

```js
await parse('{"left": "phalange"}')

await parse('{"left": "phalange"}', 'json')

await parse('left = "phalange"', {type: 'toml'})

await parse('left = phalange', {filename: 'path/to/data.yml'})
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
  - Should be one of `cjs`, `esm`, `ini`, `json`, `json5`, `csv`
- options.pretty
  - Pretty output
  - Default `false`

examples:

```js
await stringify({left: 'phalange'})
// {"left": "phalange"}

await stringify({left: 'phalange'}, 'toml')
// left = "phalange"

await stringify({left: 'phalange'}, true)
// {
//   "left": "phalange"
// }

await stringify({left: 'phalange'}, {type: 'json5', pretty: true})
// {
//   left: 'phalange',
// }
```

## Related

- [left-phalange](https://github.com/fisker/left-phalange) - CLI for this module

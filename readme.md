# left-phalange-api

> CommonJS, ESModule, INI, JSON, JSON5, TOML, YAML data loader, parser and stringifier

## Install

```sh
npm install --global left-phalange-api
```

## Usage

```js
import {parse, load, stringify} from 'left-phalange-api'
```

### parse(string, type[, options])

- string
  - type: `String`
  - string to parse
- type
  - type: `String`
  - data type of `string`
  - should be one of `ini`, `json`, `json5`, `toml`, `yaml`
- options
  - optional
  - type: `Object`
- options.filename
  - filename

examples:

```js
parse('{"left": "phalange"}', 'json')
parse('{"left": "phalange"}', {filename: 'path/to/data.json'})
parse('{"left": "phalange"}', 'yaml', {filename: 'path/to/data'})
```

### load(file[, type])

- file
  - data file path
- type
  - optional
  - data type of `file`
  - should be one of `cjs`, `esm`, `ini`, `js`, `json`, `json5`, `toml`, `yaml`

examples:

```js
load('path/to/data.json')
load('path/to/data', 'yaml')
```

### stringify(data[, type[, options]])

- data
  - data to stringify
- type
  - optional, default `json`
  - data type
  - should be one of `ini`, `json`, `json5`, `toml`, `yaml`

examples:

```js
stringify({left: 'phalange'})
stringify({left: 'phalange'}, 'json')
```

## License

MIT © [fisker Cheung](https://github.com/fisker)

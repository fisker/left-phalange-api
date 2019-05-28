import test from 'ava'
import {sync as temporaryWrite} from 'temp-write'
import {parse, load, stringify} from '../../src'

function loadFileFromString(string, fileName, options) {
  const file = temporaryWrite(string, fileName)
  return load(file, options)
}

function testRunner(testObject) {
  const {
    string,
    data,
    type,
    filename = `data.${type}`,
    prettyString,
    malformed,
    skip = {},
  } = testObject

  if (!skip.parse) {
    test('parse(string, type)', t => {
      t.deepEqual(parse(string, type), data)
    })

    test('parse(string, {filename})', t => {
      t.deepEqual(parse(string, {filename}), data)
    })

    test('parse(prettyString, type)', t => {
      t.deepEqual(parse(prettyString, type), data)
    })

    if (malformed) {
      test('parse(malformed, type)', t => {
        t.throws(() => {
          parse(malformed, type)
        })
      })
    }
  }

  test('load(filename)', t => {
    t.deepEqual(loadFileFromString(string, filename), data)
  })

  test('load(filename, type)', t => {
    t.deepEqual(loadFileFromString(string, 'data.xml', type), data)
  })

  if (malformed) {
    test('load(malformed)', t => {
      t.throws(() => {
        loadFileFromString(malformed)
      })
    })
  }

  test('stringify(data)', t => {
    t.is(stringify(data), JSON.stringify(data))
  })

  test('stringify(data, type)', t => {
    t.is(stringify(data, type), string)
  })

  test('stringify(data, true)', t => {
    t.is(stringify(data, true), JSON.stringify(data, null, 2))
  })

  test('stringify(data, {type, pretty: true})', t => {
    t.is(stringify(data, {type, pretty: true}), prettyString)
  })
}

export default testRunner

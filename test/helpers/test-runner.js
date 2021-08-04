import test from 'ava'
import {parse, stringify} from '../../lib/index.js'
import loadFromString from './load-from-string.js'

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
    test('parse(string, type)', (t) => {
      t.deepEqual(parse(string, type), data)
    })

    test('parse(string, {filename})', (t) => {
      t.deepEqual(parse(string, {filename}), data)
    })

    test('parse(prettyString, type)', (t) => {
      t.deepEqual(parse(prettyString, type), data)
    })

    if (malformed) {
      test('parse(malformed, type)', (t) => {
        t.throws(() => {
          parse(malformed, type)
        })
      })
    }
  }

  test('load(filename)', async (t) => {
    t.deepEqual(await loadFromString(string, filename), data)
  })

  if (type !== 'esm' && type !== 'cjs') {
    test('load(filename, type)', async (t) => {
      t.deepEqual(await loadFromString(string, 'data.xml', type), data)
    })
  }

  if (malformed) {
    test('load(malformed)', async (t) => {
      await t.throwsAsync(async () => {
        await loadFromString(malformed, filename, type)
      })
    })
  }

  test('stringify(data)', (t) => {
    t.is(stringify(data), JSON.stringify(data))
  })

  test('stringify(data, type)', (t) => {
    t.is(stringify(data, type), string)
  })

  test('stringify(data, true)', (t) => {
    t.is(stringify(data, true), JSON.stringify(data, null, 2))
  })

  test('stringify(data, {type, pretty: true})', (t) => {
    t.is(stringify(data, {type, pretty: true}), prettyString)
  })
}

export default testRunner

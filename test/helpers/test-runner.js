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
    malformedData,
    skip = {},
  } = testObject

  if (!skip.parse) {
    test('parse(string, type)', async (t) => {
      t.deepEqual(await parse(string, type), data)
    })

    test('parse(string, {filename})', async (t) => {
      t.deepEqual(await parse(string, {filename}), data)
    })

    test('parse(prettyString, type)', async (t) => {
      t.deepEqual(await parse(prettyString, type), data)
    })

    if (malformed) {
      test('parse(malformed, type)', async (t) => {
        await t.throwsAsync(async () => {
          await parse(malformed, type)
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

  test('stringify(data)', async (t) => {
    t.is(await stringify(data), JSON.stringify(data))
  })

  test('stringify(data, type)', async (t) => {
    t.is(await stringify(data, type), string)
  })

  test('stringify(data, true)', async (t) => {
    t.is(await stringify(data, true), JSON.stringify(data, null, 2))
  })

  test('stringify(data, {type, pretty: true})', async (t) => {
    t.is(await stringify(data, {type, pretty: true}), prettyString)
  })

  if (Array.isArray(malformedData)) {
    for (const [index, malformed] of malformedData.entries()) {
      test(`stringify(malformed) [${index + 1}]`, async (t) => {
        await t.throwsAsync(async () => {
          await stringify(malformed, {type})
        })
      })
    }
  }
}

export default testRunner

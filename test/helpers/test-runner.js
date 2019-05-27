import test from 'ava'
import {sync as temporaryWrite} from 'temp-write'
import {parse, load, stringify} from '../../src'

function testRunner(testObject) {
  const {skip = {}} = testObject
  if (!skip.parse) {
    test('parse', t => {
      t.deepEqual(parse(testObject.string, testObject.type), testObject.data)
      t.deepEqual(
        parse(testObject.prettyString, testObject.type),
        testObject.data
      )

      if (testObject.malformed) {
        t.throws(() => {
          parse(testObject.malformed, testObject.type)
        })
      }
    })
  }

  test('load', t => {
    function loadFileFromString(
      string,
      fileName = testObject.filename || `data.${testObject.type}`
    ) {
      const file = temporaryWrite(string, fileName)
      return load(file)
    }

    t.deepEqual(loadFileFromString(testObject.string), testObject.data)
    t.deepEqual(
      load(temporaryWrite(testObject.string, 'data.xml'), testObject.type),
      testObject.data
    )
    t.deepEqual(loadFileFromString(testObject.prettyString), testObject.data)

    if (testObject.malformed) {
      t.throws(() => {
        loadFileFromString(testObject.malformed)
      })
    }
  })

  test('stringify', t => {
    t.is(stringify(testObject.data, testObject.type), testObject.string)
    t.is(
      stringify(testObject.data, testObject.type, {pretty: true}),
      testObject.prettyString
    )
  })
}

export default testRunner

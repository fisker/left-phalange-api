import test from 'ava'
import {parse} from '../lib/index.js'
import loadFromString from './helpers/load-from-string.js'

test('parse(data)', async (t) => {
  t.deepEqual(
    await parse('left = phalange'),
    await parse('left = phalange', {type: 'yaml'})
  )
})

test("load('data.xml')", async (t) => {
  await t.throwsAsync(async () => {
    await loadFromString('left: [phalange', 'data.xml')
  })

  t.deepEqual(
    await loadFromString('left = phalange', 'data.yml'),
    await parse('left = phalange')
  )
})

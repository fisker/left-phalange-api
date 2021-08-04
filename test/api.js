import test from 'ava'

import {parse} from '../lib/index.js'
import loadFromString from './helpers/load-from-string.js'

test('parse(data)', (t) => {
  t.deepEqual(
    parse('left = phalange'),
    parse('left = phalange', {type: 'yaml'})
  )
})

test("load('data.xml')", (t) => {
  t.throws(() => {
    loadFromString('left: [phalange', 'data.xml')
  })

  t.deepEqual(
    loadFromString('left = phalange', 'data.yml'),
    parse('left = phalange')
  )
})

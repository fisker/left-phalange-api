import test from 'ava'

import {parse, load, stringify} from '../src'

test('stringify options(String)', t => {
  t.is(
    stringify({left: 'phalange'}, 'toml'),
    stringify({left: 'phalange'}, {type: 'toml'})
  )
})

test('stringify options(Boolean)', t => {
  t.is(
    stringify({left: 'phalange'}, true),
    stringify({left: 'phalange'}, {pretty: true})
  )
})

test('parse(data)', t => {
  t.deepEqual(
    parse('left = phalange'),
    parse('left = phalange', {type: 'yaml'})
  )
})

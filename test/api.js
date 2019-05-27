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

test('parse options(Boolean)', t => {
  t.deepEqual(
    parse(`left= "phalange"`, 'toml'),
    parse(`left= "phalange"`, {type: 'toml'})
  )
})

test('parse options.filename', t => {
  t.deepEqual(
    parse(`left= "phalange"`, {type: 'toml'}),
    parse(`left= "phalange"`, {filename: 'data.toml'})
  )
})

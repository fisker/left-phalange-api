import test from 'ava'

import {parse, load, stringify} from '../src'

test('parse(data)', t => {
  t.deepEqual(
    parse('left = phalange'),
    parse('left = phalange', {type: 'yaml'})
  )
})

import {outdent} from 'outdent'
import testRunner from './helpers/test-runner'

const data = {left: 'phalange'}

const testObject = {
  type: 'json5',
  data,
  string: "{left:'phalange'}",
  prettyString: outdent`
    {
      left: 'phalange',
    }
  `,
  malformed: 'left: [phalange',
}

testRunner(testObject)

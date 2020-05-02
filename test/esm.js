import {outdent} from 'outdent'
import testRunner from './helpers/test-runner'

const data = {left: 'phalange'}

const testObject = {
  type: 'esm',
  filename: 'data.mjs',
  data,
  string: "export default {left:'phalange'};",
  prettyString: outdent`
    export default {
      left: 'phalange',
    };
  `,
  malformed: 'left: [phalange',
  skip: {
    parse: true,
  },
}

testRunner(testObject)

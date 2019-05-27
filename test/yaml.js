import testRunner from './helpers/test-runner'

const data = {left: 'phalange'}

const testObject = {
  type: 'yaml',
  filename: 'data.yml',
  data,
  string: `left: phalange
`,
  prettyString: `left: phalange
`,
  malformed: 'left: [phalange',
}

testRunner(testObject)

import testRunner from './helpers/test-runner'

const data = {left: 'phalange'}

const testObject = {
  type: 'toml',
  data,
  string: `left = "phalange"
`,
  prettyString: `left = "phalange"
`,
  malformed: 'left= [phalange',
}

testRunner(testObject)

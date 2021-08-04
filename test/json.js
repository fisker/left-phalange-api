import testRunner from './helpers/test-runner.js'

const data = {left: 'phalange'}

const testObject = {
  type: 'json',
  data,
  string: JSON.stringify(data),
  prettyString: JSON.stringify(data, null, 2),
  malformed: 'left: [phalange',
}

testRunner(testObject)

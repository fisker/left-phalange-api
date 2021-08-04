import testRunner from './helpers/test-runner.js'

const data = {left: 'phalange'}

const testObject = {
  type: 'yaml',
  filename: 'data.yml',
  data,
  string: 'left: phalange\n',
  prettyString: 'left: phalange\n',
  malformed: 'left: [phalange',
}

testRunner(testObject)

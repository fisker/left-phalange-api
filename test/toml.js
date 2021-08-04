import testRunner from './helpers/test-runner.js'

const data = {left: 'phalange'}

const testObject = {
  type: 'toml',
  data,
  string: 'left = "phalange"\n',
  prettyString: 'left = "phalange"\n',
  malformed: 'left= [phalange',
}

testRunner(testObject)

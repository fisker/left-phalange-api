import testRunner from './helpers/test-runner.js'

const data = [
  ['left', 'phalange'],
  ['middle', 'phalange'],
  ['right', 'phalange'],
]

const testObject = {
  type: 'csv',
  data,
  string: data.map((row) => row.join(',')).join('\n'),
  prettyString: data.map((row) => row.join(',')).join('\n'),
  malformedData: [{left: 'phalange'}],
}

testRunner(testObject)

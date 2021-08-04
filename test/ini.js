import process from 'node:process'
import testRunner from './helpers/test-runner.js'

const INI_LINE_FEED = process.platform === 'win32' ? '\r\n' : '\n'
const data = {left: 'phalange'}

const testObject = {
  type: 'ini',
  data,
  string: `left=phalange${INI_LINE_FEED}`,
  prettyString: `left = phalange${INI_LINE_FEED}`,
}

testRunner(testObject)

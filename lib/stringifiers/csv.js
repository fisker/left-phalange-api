import {writeToString} from '@fast-csv/format'

async function stringifyCsv(data /* , options */) {
  return writeToString(data)
}

export default stringifyCsv

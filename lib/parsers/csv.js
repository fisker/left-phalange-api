import {parseString} from '@fast-csv/parse'

function parseCsv(content /* , options */) {
  return new Promise((resolve, reject) => {
    const data = []

    parseString(content)
      .on('error', (error) => {
        reject(error)
      })
      .on('data', (row) => {
        data.push(row)
      })
      .on('end', () => {
        resolve(data)
      })
  })
}

export default parseCsv

//

import fixtureCasesExtract from 'fixture-cases-extract'
import path from 'path'
import test from 'tape'

//

const FIXTURE_FOLDER_SHEMA = {
  basePath: path.join(__dirname, 'fixtures'),
  fileMap: {
    expected: 'stdout.txt',
    options: 'options.json'
  }
}

//

test('loser-cli', function (t) {
  fixtureCasesExtract(FIXTURE_FOLDER_SHEMA)
  .forEach(function (testCase) {
    t.equal(testCase, {})
  })
})

//

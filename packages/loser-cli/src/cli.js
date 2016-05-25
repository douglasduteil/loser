//

import yargs from 'yargs'

import cliOptions from './cliOptions.js'

//

export default yargs
  .options(cliOptions)
  //
  .detectLocale(false)
  .help('help')
  .version(function () {
    return require('../../../package').version
  })

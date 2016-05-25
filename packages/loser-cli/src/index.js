#!/usr/bin/env node

import Debug from 'debug'

import cli from './cli.js'

//

const debug = Debug('loser')

var argv = cli.parse(process.argv)
debug('argv %j', argv)

console.log('done')

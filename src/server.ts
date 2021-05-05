import api from './services/api'
import 'reflect-metadata'
import { createConnection } from 'typeorm'

// Main
import logger from './util/logger'
;(async () => {
  try {
    const postgres = await createConnection()
    logger.info(
      `Connected to postgres database: ${JSON.stringify(postgres.options)}`,
    )
  } catch (error) {
    logger.error(`Unable to connect to postgres database: ${error.stack}`)
  }
  api.listen(api.get('port'), () => {
    console.log(
      '  App is running at http://localhost:%d in %s mode',
      api.get('port'),
      api.get('env'),
    )
    console.log('  Press CTRL-C to stop\n')
  })
})()

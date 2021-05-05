import winston, { format } from 'winston'

const options: winston.LoggerOptions = {
  transports: [
    new winston.transports.Console({
      level: process.env.NODE_ENV === 'production' ? 'error' : 'debug',
    }),
    new winston.transports.File({ filename: 'debug.log', level: 'debug' }),
  ],
  format: format.combine(format.json(), format.prettyPrint()),
}

const logger = winston.createLogger(options)

if (process.env.NODE_ENV !== 'production') {
  logger.debug('Logging initialized at debug level')
}

export default logger

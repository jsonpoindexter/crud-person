import express from 'express'
import morgan from 'morgan'

// Create Express server
const api = express()

// Express configuration
api.set('port', process.env.PORT || 3000)
api.use(morgan('combined'))

api.get('/', (req, res) => res.send())

export default api

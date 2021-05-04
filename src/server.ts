import api from './services/api'

// Main
;(async () => {
  api.listen(api.get('port'), () => {
    console.log(
      '  App is running at http://localhost:%d in %s mode',
      api.get('port'),
      api.get('env'),
    )
    console.log('  Press CTRL-C to stop\n')
  })
})()

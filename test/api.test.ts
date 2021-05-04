import request from 'supertest'
import api from '../src/services/api'

describe('GET /', () => {
  it('should return 200 OK', () => {
    return request(api).get('/').expect(200)
  })
})

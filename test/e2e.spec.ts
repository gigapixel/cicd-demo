import request from 'supertest'
import { app } from '../src/app'

describe('Sample Test', () => {
  it('should test that true === true', () => {
    expect(true).toBe(true)
  })

  it("should return 'Express + TypeScript Server (v1.0.0)'", async () => {
    const res = await request(app).get('/')
    expect(res.statusCode).toEqual(200)
    expect(res.text).toEqual('Express + TypeScript Server (v1.0.0)')
  })
})

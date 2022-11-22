import request from 'supertest'
import { app } from '../src/app'

describe('Sample Test', () => {
  it('should test that true === true', () => {
    expect(true).toBe(true)
  })

  it('should test that false === false', () => {
    expect(false).toBe(false)
  })

  it('should test that 1 === 1', () => {
    expect(1).toBe(1)
  })

  it("should return 'Express + TypeScript Server (v1.0.0)'", async () => {
    const res = await request(app).get('/')
    expect(res.statusCode).toEqual(200)
    expect(res.text).toEqual('Express + TypeScript Server (v1.0.0)')
  })
})

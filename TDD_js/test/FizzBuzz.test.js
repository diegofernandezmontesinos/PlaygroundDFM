import { describe, it, expect } from 'vitest'
import { fizzbuzz } from './FizzBuzz.js'

describe('fizzbuzz', () => {
  it('fizzbuzz must be a function', () => {
    expect(typeof fizzbuzz).toBe('function')
  })

  it('should trow an error if not number is provided as parameter', () => {
    expect(() => fizzbuzz()).toThrow()
  })

  it('should return 1 if number provided is 1', () => {
    expect(fizzbuzz(1)).toBe(1)
  })

  it('should return "fizz" if number is 3', () => {
    expect(fizzbuzz(3)).toBe('fizz')
  })

  it('should return "fizz" if number / 3 is 0', () => {
    expect(fizzbuzz(6)).toBe('fizz')
    expect(fizzbuzz(9)).toBe('fizz')
    expect(fizzbuzz(12)).toBe('fizz')
  })

  it('should return "buzz" if number / 5 is 0', () => {
    expect(fizzbuzz(5)).toBe('buzz')
  })

  it('should return "buzz" if number / 5 is 0', () => {
    expect(fizzbuzz(10)).toBe('buzz')
    expect(fizzbuzz(20)).toBe('buzz')
    expect(fizzbuzz(50)).toBe('buzz')
  })

  it('should return "fizzbuzz" if number / 5 is 0 and number / 3 == 0', () => {
    expect(fizzbuzz(15)).toBe('fizzbuzz')
  })

  it('should return "woff" if number / 7 is 0', () => {
    expect(fizzbuzz(7)).toBe('woff')
    expect(fizzbuzz(14)).toBe('woff')
    expect(fizzbuzz(28)).toBe('woff')
  })

  it('should return "fizzwoff" if number / 7 is 0 and number / 3 == 0', () => {
    expect(fizzbuzz(21)).toBe('fizzwoff')
  })
})
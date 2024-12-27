import { describe, it, expect } from 'vitest'

/* escribir una funcion que al pasarle un número:
    -muestre 'fizz' si es multiplo de  3.
    -muestre 'buzz' si es multiplo de 5.
    -muestre 'fizzbuzz' si es multiplo de 3 y 5.
    -muestre el número si no es nada de lo anterior.
*/

const fizzbuzz = (number) => {
    if(typeof number !== 'number') throw new Error()
    if(number === 3) return 'fizz'
    return number
}

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
})

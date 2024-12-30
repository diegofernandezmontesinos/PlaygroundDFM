import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react';
import ConditionalCounter from './ConditionalCounter';



/*
Diseña un componente de React llamado ConditionalCounter que cumpla con lo siguiente:

    Muestra un número que empieza en 0.
    Tiene un botón con el texto "Incrementar".
    Cada vez que se haga clic en el botón:
        Si el número actual es par, incrementa el contador en 1.
        Si el número actual es impar, incrementa el contador en 2.

Condiciones:

    Escribe pruebas unitarias para:
        Verificar que el contador empieza en 0.
        Comprobar que el número cambia según la regla par/impar al hacer clic en el botón.
        Asegurarte de que el botón muestra siempre el texto correcto.

*/

describe('conditionalCounter', () => {
  it('conditionalCounter render', () => {
    render(<ConditionalCounter />)
    expect(screen.getByText('Conditional Counter')).toBeInTheDocument();
  })

//   it('should trow an error if not number is provided as parameter', () => {
//     expect(() => fizzbuzz()).toThrow()
//   })

//   it('should return 1 if number provided is 1', () => {
//     expect(fizzbuzz(1)).toBe(1)
//   })
//   it('should return "fizz" if number is 3', () => {
//     expect(fizzbuzz(3)).toBe('fizz')
//   })

//   it('should return "fizz" if number / 3 is 0', () => {
//     expect(fizzbuzz(6)).toBe('fizz')
//     expect(fizzbuzz(9)).toBe('fizz')
//     expect(fizzbuzz(12)).toBe('fizz')
//   })

//   it('should return "buzz" if number / 5 is 0', () => {
//     expect(fizzbuzz(5)).toBe('buzz')
//   })

//   it('should return "buzz" if number / 5 is 0', () => {
//     expect(fizzbuzz(10)).toBe('buzz')
//     expect(fizzbuzz(20)).toBe('buzz')
//     expect(fizzbuzz(50)).toBe('buzz')
//   })

//   it('should return "fizzbuzz" if number / 5 is 0 and number / 3 == 0', () => {
//     expect(fizzbuzz(15)).toBe('fizzbuzz')
//   })

//   it('should return "woff" if number / 7 is 0', () => {
//     expect(fizzbuzz(7)).toBe('woff')
//     expect(fizzbuzz(14)).toBe('woff')
//     expect(fizzbuzz(28)).toBe('woff')
//   })

//   it('should return "fizzwoff" if number / 7 is 0 and number / 3 == 0', () => {
//     expect(fizzbuzz(21)).toBe('fizzwoff')
//   })
})



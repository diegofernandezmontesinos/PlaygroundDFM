/* escribir una funcion que al pasarle un número:
    -muestre 'fizz' si es multiplo de  3. ✅
    -muestre 'buzz' si es multiplo de 5. ✅
    -muestre 'fizzbuzz' si es multiplo de 3 y 5. ✅
    -muestre el número si no es nada de lo anterior. ✅
    -muestre buzzfizz si el numero es multiplo de 7. ✅
*/

export const fizzbuzz = (number) => {
    if(typeof number !== 'number') throw new Error()
    // if(number % 3 === 0 && number % 5 === 0) return 'fizzbuzz' 
    // if(number % 3 === 0 && number % 7 === 0) return 'buzzbuzz'  
    // if(number % 5 === 0) return 'buzz'
    // if(number % 3 === 0) return 'fizz'
    // if(number % 7 === 0) return 'buzzfizz'
    // return number

    const multiplies = {
        3: 'fizz',
        5: 'buzz',
        7: 'woff'
    }

    let output = ''

    Object
        .entries(multiplies)
        .forEach(([multiplier, word]) => {
            if(number % multiplier === 0) output += word
        })
        return output === '' ? number : output
}

/* enunciado 
crear una funcion que reciba como parametro un arreglo.
el mismo debe efectuar la suma solo de los numeros positivos*/


let numeros = [-45, 55, -78, 5, 7, 99, 5, 4, -888, 77, 4, 23, 14, 45, 78, 44, 56]
let numeros2 = [-10, -2, 3, 4]

const sumaPositivos = (result) => {
  const resultFilter = result.filter((valor) => valor > 0)
  const resultadoReduce = (a, b) => a + b

  console.log(`La suma de los números positivos es ${(resultFilter.reduce(resultadoReduce))}`)
}
sumaPositivos(numeros)
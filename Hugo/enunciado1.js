/* enunciado 
crear una funcion que reciba como parametro un arreglo.
el mismo debe efectuar la suma solo de los numeros positivos*/


    let numeros = [-45,55,-78,5,7,99,5,4,-888,77,4,23,14,45,78,44,56]
  /*  const filtradoDeNumeros = numeros.filter((valor)=> valor > 0)

console.log(filtradoDeNumeros)*/

let suma = 0
/*const numero = () => {*/
    const filtradoDeNumeros = numeros.filter((valor)=> valor > 0)
 for (let i = 0; i < filtradoDeNumeros.length; i++) {
     suma += numeros[i]
 }

console.log ("la suma es: " + suma)

// realizar una funcion que reciba recorra el objeto perro y lo convierta en array
// con la informacion del nombre, años y propietario del animal
// el arreglo debe retornar un mensaje de esta manera 'El perro se llama [nombre perro] y tiene [cantidad] años y su dueño es [dueño]'

const perritos = [
  {
    id: 1,
    nombre: "Boby",
    edad: 2,
    propietario: "marcela",
  },
  {
    id: 2,
    nombre: "tom",
    edad: 8,
    propietario: "armando",
  },
  {
    id: 3,
    nombre: "princesa",
    edad: 2,
    propietario: "betty",
  },
  {
    id: 4,
    nombre: "Toby",
    edad: 2,
    propietario: "mario",
  },
  {
    id: 5,
    nombre: "Pepe",
    edad: 4,
    propietario: "freddy",
  },
  {
    id: 6,
    nombre: "zulema",
    edad: 2,
    propietario: "willson",
  },
  {
    id: 7,
    nombre: "peter",
    edad: 1,
    propietario: "steven",
  },
  {
    id: 8,
    nombre: "sultan",
    edad: 3,
    propietario: "miguel",
  },
  {
    id: 9,
    nombre: "nirvana",
    edad: 4,
    propietario: "erick",
  },
  {
    id: 10,
    nombre: "tormenta",
    edad: 8,
    propietario: "luis",
  },
];

const animals = [
  {
    id: 1,
    nombre: "Hugo",
    edad: 2,
    propietario: "Josue",
  },
  {
    id: 2,
    nombre: "tom",
    edad: 8,
    propietario: "armando",
  },
  {
    id: 3,
    nombre: "Oliver",
    edad: 2,
    propietario: "Maykel",
  },
  {
    id: 4,
    nombre: "Toby",
    edad: 2,
    propietario: "Andres",
  },
  {
    id: 5,
    nombre: "chachito",
    edad: 30,
    propietario: "Josue"
  }
];

const infoPerros = (objetoPerros) => 
   objetoPerros.map(({nombre, edad, propietario, id}) => {
     return `El perro se llama ${nombre} y tiene ${edad} años y su dueño es ${propietario}. Tiene asinado el ID: ${id}`
})

console.log(infoPerros(perritos))



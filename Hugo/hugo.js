// realizar una funcion que reciba como parametros el objeto perro y lo convierta en array con la informacion del nombre, años y propietario del animal
// el arreglo debe retornar un mensaje de esta manera 'El perro se llama [nombre perro] y tiene [cantidad] años y su dueño es [dueño]'


// const animals = [
//   {
//     id: 1,
//     nombre: "Hugo",
//     edad: 2,
//     propietario: "Josue",
//   },
//   {
//     id: 2,
//     nombre: "tom",
//     edad: 8,
//     propietario: "armando",
//   },
//   {
//     id: 3,
//     nombre: "Oliver",
//     edad: 2,
//     propietario: "Maykel",
//   },
//   {
//     id: 4,
//     nombre: "Toby",
//     edad: 2,
//     propietario: "Andres",
//   },
//   {
//     id: 5,
//     nombre: "chachito",
//     edad: 30,
//     propietario: "Josue"
//   }
// ];

const animals2 = [
  {
    id: 1,
    nombre: "Hugo",
    edad: 2,
    propietario: "Josue",
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


const createMessage = () => {
  const newMessage = []
  for (let i = 0; i < animals2.length; i++) {
    newMessage.push(`El perro se llama ${animals[i].nombre}, su edad es ${animals[i].edad} años, el nombre de su dueño es ${animals[i].propietario} y tiene asignado el ID: ${animals[i].id}`)
  } 
  console.log(newMessage)
}
createMessage(animals2)


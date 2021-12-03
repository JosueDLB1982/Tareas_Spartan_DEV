// realizar una funcion que reciba como parametros el objeto perro y lo convierta en array
// con la informacion del nombre, años y propietario del animal
// el arreglo debe retornar un mensaje de esta manera 'El perro se llama [nombre perro] y tiene [cantidad] años y su dueño es [dueño]'

const dogsArray = [
  {
    id: 1,
    name: "Hunter",
    age: 2,
    owner: "Heli",
    race: "Perro",
  },
  {
    id: 2,
    name: "Athena",
    age: 8,
    owner: "Bexabe",
    race: "Perro",
  },
  {
    id: 3,
    name: "Princesa",
    age: 2,
    owner: "Betty",
    race: "Perro",
  },
  {
    id: 4,
    name: "Brown",
    age: 2,
    owner: "Rosa",
    race: "Perro",
  },
  {
    id: 5,
    name: "Pepe",
    age: 4,
    owner: "Freddy",
    race: "Perro",
  },
  {
    id: 6,
    name: "Zulema",
    age: 2,
    owner: "Willson",
    race: "Perro",
  },
  {
    id: 7,
    name: "Peter",
    age: 1,
    owner: "Steven",
    race: "Perro",
  },
  {
    id: 8,
    name: "Sultan",
    age: 3,
    owner: "Miguel",
    race: "Perro",
  },
  {
    id: 9,
    name: "Nirvana",
    age: 4,
    owner: "Erick",
    race: "Perro",
  },
  {
    id: 10,
    name: "Tormenta",
    age: 8,
    owner: "Luis",
    race: "Perro",
  },
];
const catsArray = [
  {
    id: 1,
    name: "Misu",
    age: 2,
    owner: "Elibeth",
    race: "Gato",
  },
  {
    id: 2,
    name: "Coco",
    age: 8,
    owner: "Reagan",
    race: "Gato",
  },
  {
    id: 3,
    name: "Gatsby",
    age: 2,
    owner: "Carlibeth",
    race: "Gato",
  },
  {
    id: 4,
    name: "Cosmo",
    age: 2,
    owner: "Bryan",
    race: "Gato",
  },
  {
    id: 5,
    name: "Chloe",
    age: 4,
    owner: "Stewart",
    race: "Gato",
  },
  {
    id: 6,
    name: "Daisy",
    age: 2,
    owner: "Albino",
    race: "gato",
  },
  {
    id: 7,
    name: "Fiona",
    age: 1,
    owner: "Enmanuel",
    race: "Gato",
  },
  {
    id: 8,
    name: "Kiki",
    age: 3,
    owner: "Albis",
    race: "Gato",
  },
  {
    id: 9,
    name: "Kitty",
    age: 4,
    owner: "Jonathan",
    race: "Gato",
  },
  {
    id: 10,
    name: "Luna",
    age: 8,
    owner: "Joseph",
    race: "Gato",
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


const findCharacteristicArray = (animalsArray) =>
  animalsArray.map(({ name, age, owner, race }) => {
    return `El ${race} se llama ${name} y tiene ${age} años y su dueño es ${owner}`;
  });

console.log(findCharacteristicArray(dogsArray));
console.log(findCharacteristicArray(catsArray));
console.log(findCharacteristicArray(animals));
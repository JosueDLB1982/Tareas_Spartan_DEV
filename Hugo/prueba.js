const animals = [
  {
    id: 11,
    name: "Hugo",
    age: 2,
    owner: "Josue",
    race: "Perro",
  },
  {
    id: 16,
    name: "Daisy",
    age: 2,
    owner: "Albino",
    race: "Perro",
  },
  {
    id: 12,
    name: "tom",
    age: 8,
    owner: "armando",
    race: "Perro",
  },
  {
    id: 13,
    name: "Oliver",
    age: 2,
    owner: "Maykel",
    race: "Perro",
  },
  {
    id: 14,
    name: "Toby",
    age: 2,
    owner: "Andres",
    race: "Perro",
  },
  {
    id: 15,
    name: "chachito",
    age: 30,
    owner: "Josue",
    race: "Perro",
  },
];

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

//   const findCharacteristicArray = (animalsArray) => {
//   animalsArray.map(({ name, age, owner, race }) => {
//     return `El ${race} se llama ${name} y tiene ${age} años y su dueño es ${owner}`
//   })
//   return animalsArray

// }

// console.log(findCharacteristicArray(dogsArray))

const mapping = (arr) => {
  const result = arr.map(({ name, age, owner}) => `el perro ${name} tiene ${age} años y su propietario es ${owner}`);
  return result;
};

console.log(mapping(animals));

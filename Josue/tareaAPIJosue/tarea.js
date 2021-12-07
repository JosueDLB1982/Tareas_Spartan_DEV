const button = document.getElementById('button')
const results = []

button.addEventListener('click', () => {
    axios({
        method: 'GET',
        url: 'https://api.got.show/api/general/characters'
    })
    .then((res) => {
        for (const characters of res.data.book) {
            results.push(`Titulo: ${characters.titles}, Nombre: ${characters.name}, Casa: ${characters.house}\n`)
        } results.splice(10)
          console.log(...results)
    })
    .catch(err => console.log(err))
})
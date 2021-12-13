const button = document.getElementById('button')
const charactersList = []

button.addEventListener('click', () => {
    axios({
        method: 'GET',
        url: 'https://api.got.show/api/general/characters'
    })
        .then((res) => {
            for (const characters of res.data.book) {
                if (characters.titles.length !== 0) {
                    charactersList.push(`${characters.titles}, ${characters.name}, ${characters.house}\n`)
                } else charactersList.push(`No posee título, ${characters.name}, ${characters.house}\n`)

                const varyResult = (char) => {
                    const varyChar = char.sort(() => { return Math.random() - 0.5 })
                    return varyChar
                }
                varyResult(charactersList)
                charactersList.splice(10)
            }
            if (charactersList.length !== 0) { // condicional agregado para borrar los resultados de la petición anterior
                document.getElementById('list').innerHTML = '' 
                charactersList.map((res) => {
                    const listItem = document.createElement('li')
                    listItem.textContent = res
                    list.appendChild(listItem)
                })
            } else {
                charactersList.map((res) => {
                    const listItem = document.createElement('li')
                    listItem.textContent = res
                    list.appendChild(listItem)
                })
            }
            console.log(...charactersList)
        }).catch(error => console.log(`${error} No hubo respuesta satisfactoria del servidor. Compruebe la url de consulta.`))
})

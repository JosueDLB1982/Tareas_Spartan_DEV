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
            charactersList.map((res) => {
                const list = document.getElementById('list')
                const fragment = document.createDocumentFragment()
                const listItem = document.createElement('li')
                listItem.textContent = res
                fragment.appendChild(listItem)
                list.appendChild(fragment)
            })
            console.log(...charactersList)
        }).catch(error => console.log(`${error} No hubo respuesta satisfactoria del servidor`))
})

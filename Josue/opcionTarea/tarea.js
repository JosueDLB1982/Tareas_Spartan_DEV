const result = []
button.addEventListener('click', () => {
    axios({
        method: 'GET',
        url: 'https://api.got.show/api/general/characters'
    }).then(res => {
        const list = document.getElementById('list')
        const fragment = document.createDocumentFragment()
        for (const characters of res.data.book) {
            const listItem = document.createElement('li')
            listItem.textContent = (`Titulo: ${characters.titles}, Nombre: ${characters.name}, Casa: ${characters.house}`)
            fragment.appendChild(listItem)
        }
        list.appendChild(fragment)
    }).catch(err => console.log(err))
})
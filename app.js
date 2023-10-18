
'use strict'

const taylorInput = document.getElementById('taylor')
 async function pegarMusica(taylor){
    const url = `https://taylorswiftapi.onrender.com/get-all?song=<song>`
    const response = await fetch(url)
    const musica = await response.json()
    return musica
}

taylorInput.addEventListener('focusout')
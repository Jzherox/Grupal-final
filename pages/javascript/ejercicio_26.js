const resultado = document.getElementById('salida')

function mostrar(texto) {
    resultado.innerHTML += `${texto}<br>`
}

function calcular() {
    resultado.innerHTML = ''

    const texto = document.getElementById('texto').value.trim()
    let nuevoTexto = ''

    for (let i = 0; i < texto.length; i++) {
    if (texto[i] === 'a') {
        nuevoTexto += '@'
    } else {
        nuevoTexto += texto[i]
    }
    }

    mostrar(`${nuevoTexto}`)
}
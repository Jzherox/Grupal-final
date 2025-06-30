const resultado = document.getElementById('salida')

function mostrar(texto) {
    resultado.innerHTML += `${texto}<br>`
}

let palabras = []

function añadir() {
    resultado.innerHTML = ''
    const palabra = document.getElementById('elemento').value.trim()
    if (palabra == '') {
        mostrar('Debes ingresar una palabra.')
        return
    } else {
        palabras.push(palabra)
        mostrar(`La palabra '${palabra}' ha sido añadida al arreglo`)
        mostrar(`Arreglo de palabras: ${palabras}`)
        document.getElementById('elemento').value = ''
    }
}

function calcular() {
    resultado.innerHTML = ''
    let textoConcatenado = ''

    for (let i = 0; i < palabras.length; i++) {
        textoConcatenado += palabras[i]
        textoConcatenado += ' '
    }

    mostrar('Textos concatenados:')
    mostrar(`${textoConcatenado}`)
}
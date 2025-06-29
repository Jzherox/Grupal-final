const resultado = document.getElementById('salida')

function mostrar(texto) {
    resultado.innerHTML += `${texto}<br>`
}

function calcular() {
    resultado.innerHTML = ''

    let numeros = (document.getElementById('numeros').value).split(';').map(Number)
    let cubos = []

    for (let i = 0; i < numeros.length; i++) {
        cubos[i] = Math.pow(numeros[i], 3)
    }

    numeros = numeros.join(", ")
    cubos = cubos.join(", ")

    mostrar(`Tus valores son: '${numeros}'`)
    mostrar(`Tus valores al cubo son: '${cubos}'`)
}
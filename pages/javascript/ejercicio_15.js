const resultado = document.getElementById('salida')

function mostrar(texto) {
    resultado.innerHTML += `${texto}<br>`
}

function calcular() {
    resultado.innerHTML = ''

    for (let i = 1; i <= 50; i++) {
        if (i % 2 == 0) {
            mostrar(`${i}`)
        }
    }
}
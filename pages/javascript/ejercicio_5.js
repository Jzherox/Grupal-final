const resultado = document.getElementById('salida')

function mostrar(texto) {
    resultado.innerHTML += `${texto}<br>`
}

function calcular() {
    resultado.innerHTML = ''

    const temperatura = parseInt(document.getElementById('temperatura').value)

    if (temperatura < 15) {
        mostrar('Hace frio')
    } else if (temperatura >= 15 && temperatura <= 25) {
        mostrar('Templado')
    } else {
        mostrar('Hace calor')
    }
}
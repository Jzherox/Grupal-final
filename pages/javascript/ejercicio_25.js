const resultado = document.getElementById('salida')

function mostrar(texto) {
    resultado.innerHTML += `${texto}<br>`
}

function calcular() {
    resultado.innerHTML = ''

    const nombres = document.getElementById('nombre').value.trim() || ''
    const arreglo_nombres = nombres.split(' ')

    if (nombres === '') {
        mostrar(`Ingresa un nombre`)
        return
    } else {
         mostrar(`Mostando las iniciales de ${nombres}:`)
    }
    for (let i = 0; i < arreglo_nombres.length; i++) {
        mostrar(`${arreglo_nombres[i][0]}`)
    }

}
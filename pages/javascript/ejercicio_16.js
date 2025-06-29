const resultado = document.getElementById('salida')

function mostrar(texto) {
    resultado.innerHTML += `${texto}<br>`
}

function calcular() {
    resultado.innerHTML = ''

    const numero = parseInt(document.getElementById('numero').value)
    let contador = 0
    
    mostrar(`Mostrando los divisores de ${numero}:`)
    
    while (contador <= numero) {
        if (numero % contador == 0) {
            mostrar(`${contador}`)
        }
        contador++
    }
}
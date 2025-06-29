const resultado = document.getElementById('salida')

function mostrar(texto) {
    resultado.innerHTML += `${texto}<br>`
}

function calcular() {
    resultado.innerHTML = ''

    const nombre = document.getElementById('nombre').value
    const genero = (document.getElementById('genero').value).toLowerCase()
    
    if (genero === 'hombre') {
        mostrar(`Bienvenido ${nombre}`)
    } else if (genero === 'mujer') {
        mostrar(`Bienvenida ${nombre}`)
    } else {
        mostrar(`Ingresa si tu genero es hombre o mujer`)
    }
}
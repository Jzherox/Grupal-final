const resultado = document.getElementById('salida')

function mostrar(texto) {
    resultado.innerHTML += `${texto}<br>`
}

let libros = []
let libros_clase1 = []
let libros_clase2 = []
let libros_clase3 = []
 
function añadir() {
    resultado.innerHTML = ``
    let libro = document.getElementById('libro').value.trim()

    if (libro == '') {
        mostrar(`Ingresa el titulo de un libro.`)
         return
    }

    if (!libros.includes(libro)) {
        libros.push(libro)
        mostrar(`El libro con titulo ${libro}, fue añadido.`)
        document.getElementById('libro').value = ''
    } else {
        mostrar(`El libro con titulo ${libro}, ya fue registrado antes.`)
        document.getElementById('libro').value = ''
    }
}

function clasificar() {
    resultado.innerHTML = ``
    for (let i = 0; i < libros.length; i++) {
        let tamaño_titulo = (libros[i].length)
        if (!libros_clase1.includes(libros[i]) && tamaño_titulo > 20) {
            libros_clase1.push(libros[i])
        } else {
            let ultimo_caracter = libros[i][tamaño_titulo - 1]
            if (!libros_clase2.includes(libros[i]) && ultimo_caracter >= 0 && ultimo_caracter <= 9) {
                libros_clase2.push(libros[i])
            } else {
                if (!libros_clase3.includes(libros[i])) {
                    libros_clase3.push(libros[i])
                }
            }
        }
    }

    mostrar(`<strong>** Clasificacion de libros **</strong>`)
    mostrar(`<br>Titulos de libros con mas de 20 caracters:`)
    mostrar(`${libros_clase1}`)
    mostrar(`<br>Titulos de libros con un caracter numerico al final:`)
    mostrar(`${libros_clase2}`)
    mostrar(`<br>Libros que no cumplen las condiciones anteriores:`)
    mostrar(`${libros_clase3}`)
} 
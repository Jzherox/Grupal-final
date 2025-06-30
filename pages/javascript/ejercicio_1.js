function ejercicio1() {
    let Edad = parseInt(document.getElementById('edad').value)
    let resultado = document.getElementById('salida')
    if (Edad < 13) {
        resultado.innerHTML = ('Usted es un niño');
    }
    else if (Edad < 18) {
        resultado.innerHTML = ('Usted es un adolescente');
    }
    else if (Edad < 60) {
        resultado.innerHTML = ('Usted es un Adulto')
    }
    else {
        resultado.innerHTML = ('Ustes es un Adulto mayor')
    }
}



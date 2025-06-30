function ejercicio2() {
    let num1 = parseFloat(document.getElementById('num_1').value)
    let num2 = parseFloat(document.getElementById('num_2').value)
    let num3 = parseFloat(document.getElementById('num_3').value)
    let num4 = parseFloat(document.getElementById('num_4').value)
    let resultado = document.getElementById('salida');
    if (num1 === num2 && num2 === num3 && num3 === num4) {
        resultado.innerHTML = `Sus numeros son iguales ${num1}</br>`
    } else {
        let mayor = num1;
        if (num2 > mayor) mayor = num2
        if (num3 > mayor) mayor = num3
        if (num4 > mayor) mayor = num4
        resultado.innerHTML = `El numero mayor es ${mayor}</br>`
    }
}

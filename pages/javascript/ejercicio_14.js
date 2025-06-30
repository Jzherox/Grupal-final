function calcularFactorial() {
    const numero = parseInt(document.getElementById("entrada").value);
    const resultadoDiv = document.getElementById("salida");

    if (isNaN(numero) || numero < 0) {
        resultadoDiv.textContent = "❌ Ingresa un número válido mayor o igual a 0.";
        return;
    }

    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }

    resultadoDiv.textContent = `✅ El factorial de ${numero} es: ${factorial}`;
}

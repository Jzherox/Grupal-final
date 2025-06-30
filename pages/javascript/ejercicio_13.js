function sumarNumeros() {
    const entrada = parseInt(document.getElementById("entrada").value);
    const resultadoDiv = document.getElementById("salida");

    if (isNaN(entrada) || entrada < 1) {
        resultadoDiv.textContent = "❌ Ingresa un número válido mayor que 0.";
        return;
    }

    let suma = 0;
    for (let i = 1; i <= entrada; i++) {
        suma += i;
    }

    resultadoDiv.textContent = `✅ La suma de los primeros ${entrada} números naturales es: ${suma}`;
}

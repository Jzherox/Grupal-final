function generarFibonacci() {
    const cantidad = parseInt(document.getElementById("cantidad").value);
    const salida = document.getElementById("salida");

    if (isNaN(cantidad) || cantidad <= 0) {
        salida.innerText = "❌ Por favor ingrese un número válido mayor a 0.";
        return;
    }

    let fib = [0, 1];

    for (let i = 2; i < cantidad; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    const resultado = fib.slice(0, cantidad).join(", ");
    salida.innerText = `✅ Secuencia Fibonacci (${cantidad} términos):\n${resultado}`;
}

function buscarValor() {
    const arregloTexto = document.getElementById("arreglo").value;
    const valorBuscar = document.getElementById("buscar").value.trim();
    const resultadoDiv = document.getElementById("salida");

    if (arregloTexto.trim() === "" || valorBuscar === "") {
        resultadoDiv.textContent = "❌ Ingresa el arreglo y el valor a buscar.";
        return;
    }

    const arreglo = arregloTexto.split(",").map(e => e.trim());

    if (arreglo.includes(valorBuscar)) {
        resultadoDiv.textContent = `✅ El valor "${valorBuscar}" SÍ existe en el arreglo.`;
    } else {
        resultadoDiv.textContent = `❌ El valor "${valorBuscar}" NO se encuentra en el arreglo.`;
    }
}

function copiarPares() {
    debugger;
    let input = document.getElementById("arreglo").value;
    let arreglo = input.split(",").map(Number);
    let pares = arreglo.filter(num => num % 2 === 0);
    document.getElementById("salida").innerText = `Elementos pares: ${pares.join(", ")}`;
}
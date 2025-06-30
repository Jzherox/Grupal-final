function sumarArreglos() {
    debugger;
    let input1 = document.getElementById("arreglo1").value;
    let input2 = document.getElementById("arreglo2").value;

    let arreglo1 = input1.split(",").map(Number);
    let arreglo2 = input2.split(",").map(Number);

    if (arreglo1.length !== arreglo2.length) {
        document.getElementById("salida").innerText = "Los arreglos deben tener la misma cantidad de elementos.";
        return;
    }

    let resultado = arreglo1.map((num, index) => num + arreglo2[index]);
    document.getElementById("salida").innerText = `Resultado: ${resultado.join(", ")}`;
}
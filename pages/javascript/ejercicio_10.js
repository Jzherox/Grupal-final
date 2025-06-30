function clienteMembresia() {
    debugger;
    let tipo = document.getElementById("tipo").value.toLowerCase();
    let monto = parseFloat(document.getElementById("monto").value);
    let descuento = 0;  
    let iva = 0;

    if (tipo === "si") {
        if (monto > 50) {
            descuento = 0.30; // 30% de descuento
            iva = 0.15;
        } else {
            descuento = 0.05; // 5% de descuento
            iva = 0.10; // IVA del 10%
        }
    } else if (tipo === "no") {
        descuento = 0.05; // 5% de descuento
        iva = 0.10; // IVA del 10%
    } else {
        alert("Tipo de membresía no válido. Ingrese 'SI' o 'NO'.");
        return;
    }

    let montoConDescuento = monto - (monto * descuento);
    let montoConIva = montoConDescuento + (montoConDescuento * iva);
    let resp = document.getElementById("salida");
    resp.innerHTML = `El total a pagar es: $${montoConIva.toFixed(2)}`;




    

}
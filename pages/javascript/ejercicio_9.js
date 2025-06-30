function tipoCliente(){
    debugger;
    let tipo = document.getElementById("tipo").value.toLowerCase();
    let monto = parseFloat(document.getElementById("monto").value);
    let resp= document.getElementById("salida");
    let descuento = 0;
    let iva = 0.15;

    if (tipo === "vip") {
        if (monto > 100) {
        descuento = 0.20; // 20% de descuento
        }  else {
            descuento = 0.10; // 10% de descuento
        }
    } else if (tipo === "normal") {
        descuento = 0; // No hay descuento para clientes normales
    } else { 
        resp.innerHTML = "Tipo de cliente no válido. Ingrese 'Normal' o 'VIP'.";
        return;
    }
    let montoConDescuento = monto - (monto * descuento);
    let montoConIva = montoConDescuento + (montoConDescuento *  iva);
    resp.innerHTML = `El total a pagar es: $${montoConIva.toFixed(2)}`;
    





    

}



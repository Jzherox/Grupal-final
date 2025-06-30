function ejercicio22(){
    let texto=document.getElementById('texto').value
    let resultado=document.getElementById('salida');
    let contador=0
    for(let c=0;c<texto.length;c++){
        if(texto[c]==="a"){
            contador++;
        }
    } 
    resultado.innerHTML=`La letra "a" aparece ${contador} veces <br>`
}
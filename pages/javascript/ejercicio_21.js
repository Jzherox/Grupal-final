function ejercicio21(){
 let palabra=document.getElementById('palabra').value;
 let resultado=document.getElementById('salida')
 let contador=0
 for(let c=0;c<palabra.length;c++){
    if(palabra[c]!=='');{
    contador++;
 }
}
 resultado.innerHTML =`la palabra tiene ${contador} letras <br>`
}
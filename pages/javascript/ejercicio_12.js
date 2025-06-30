function for2(){
    let num=parseInt(document.getElementById('numero').value)
    let resultado=document.getElementById('salida')
    resultado.innerHTML="";
    for( let c=1;c<=10;c++){
        resultado.innerHTML+=`${num}*${c}=${num*c}<br>`

    }
}
let entrada = document.getElementById("resultado");
let numero1;
let mumero2;
let operacion="";

function operaciones(o){
    numero1=entrada.value
    entrada.value = ""
    operacion = o

}

function n(n){
    if (entrada.value!=""){
        entrada.value +=n
    }else{
        entrada.value=n
    }
}

function resultado(){
    numero2 = entrada.value
    if(operacion == "sumar"){
        entrada.value = parseFloat(numero1)+parseFloat(numero2)
    }else if(operacion == "restar"){
        entrada.value = parseFloat(numero1)-parseFloat(numero2)

    }else if(operacion=="multiplicar"){
        entrada.value = parseFloat(numero1)*parseFloat(numero2)
    }else{
        entrada.value = parseFloat(numero1)/parseFloat(numero2)
    }

}

function borrar(){
    entrada.value = 0
}



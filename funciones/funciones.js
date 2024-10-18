function saludar(nombre) {
    return "hola," + nombre;
}

let saludo = ("Ana");
console.log(saludo);// "hola, ana"


function multiplicar(a, b) {
    return a * b;
}
let resultado = multiplicar(4, 5);
console.log(resultado); // 20



let global = "Soy global";
function prueba() {
    let local = "Soy local";
    console.log(global); // "Soy global"
    console.log(local); // "Soy local"
}

prueba();
//console.log(local); // Error: local is not defined



for (let i = 0; i < 5; i++) {
    console.log("numeracion: " + i);
}


let i = 0;
while (i < 5) {
    console.log("Número: " + i);
    i++;
}

let estudiantes = [
    { nombre: "carlos", edad: 40 },
    { nombre: "pedro", edad: 25 },
    { nombre: "juan", edad: 33 },
    { nombre: "julio", edad: 48 },
    { nombre: "Jose", edad: 22 }
];
for (let estudiante of estudiantes) {
    console.log(estudiante);
}





let asistencia = 40;
trabajos = 2

if (!(asistencia >= 40) && !(trabajos >= 3)) {
    console.log("recibe subsidio")
} else {
    console.log("no recibe subsidio")
}



let dia = 1;

switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    default:
        console.log("Día no válido");
}


document.getElementById("miElemento").innerHTML = "Nuevo contenido";
document.querySelector("h1").textContent = "Nuevo título";


document.getElementById("miElemento");
document.getElementsByClassName("miClase");
document.querySelector(".miClase");

function cambiar() {
    document.getElementById("miElemento").innerHTML = "no pensando"
    document.querySelector("h1").textContent = "ya no pensamos"
}
//la edad (tomariamos la fecha de nacimiento con la fecha actual y se restaria y asi tendriamos la edad exacta


function calcularEdad(fecha) {
    let diferencia = Date.now() - fecha.getTime();
    fecha = new Date(diferencia);
    return Math.abs(fecha.getUTCFullYear() - 1970);
}
   
const fecha = new Date(1990, 9, 10)

document.getElementById("edad").textContent = calcularEdad(fecha);


  

// años de antiguedad tambien(tomariamos la fecha de ingreso y se le restaria la fecha actual)

function calcularAñosDeAntiguedad(fechaIngreso, fechaActual) {
const date1 = new Date("2020-10-05");
const date2 = new Date();

const diff = Math.abs(date2.getTime() - date1.getTime());
const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));


return (`${years} años, ${months} meses, y ${days} dias`);

}   

const fechaIngreso = new Date(2020,9,5)
const fechaActual = new Date()

document.getElementById("antiguedad").textContent = calcularAñosDeAntiguedad(fechaIngreso, fechaActual);




//vacaciones (se multiplicaria los años de antiguedad por 15 (que son los dias correspondientes por un año))

function vacaciones(d) {
    const DiasCorrespondientesPorAño = 15;
    const diasVacaciones = DiasCorrespondientesPorAño * d;

    return diasVacaciones

}

const d = calcularAñosDeAntiguedad(fechaIngreso, fechaActual)
document.getElementById("vacaciones").textContent = vacaciones(d);


//vacaciones pendientes(se restas vacaciones menos las vacaciones tomadas)

function vacacionesPendientes(a){
    const VacacionesTomadas = 15;
    const diasVacacionesDisponibles = a - VacacionesTomadas;

    return  diasVacacionesDisponibles;

}
const a =  vacaciones(d);

document.getElementById("vacacionesPendientes").textContent = vacacionesPendientes(a);


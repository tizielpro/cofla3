let cantidad = prompt("cuantos alumnos son?");
let alumnosTotales = [];

for(i = 0; i < cantidad; i++){
    alumnosTotales[i] = [prompt(`nombre del alumno ${i + 1}`), 0];
}

const tomarAsistencia = (nombre,p)=>{
    let presencia = prompt(`${nombre} esta presente?`);
    if(presencia == "p" || presencia == "P"){
        alumnosTotales[p][1]++;
    }
}

for(i = 0; i < 30; i++){
    for(alumnos in alumnosTotales){
        tomarAsistencia(alumnosTotales[alumnos][0],alumnos);
    }
}

for(alumnos in alumnosTotales){
    let registro = `${alumnosTotales[alumnos][0]} <br>
    asistencias: ${alumnosTotales[alumnos][1]} <br>
    inasistencias: ${30 - alumnosTotales[alumnos][1]}`;
    if(30 - alumnosTotales[alumnos][1] > 18){
        registro+= "    <b>desaprobado por inasistencias</b> <br><br>"
    }
    else{
        registro+= "<br><br>"
    }
    
    document.write(registro);
}

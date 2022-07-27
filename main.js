function compu(minimo, maximo){

    var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
    return numero;
}

var piedra = 0;
var papel = 1;
var tijera = 2;

var opciones = ["Piedra", "Papel", "Tijera"];

var opcionUsuario;
var opcionMaquina = compu(0,2);


const pregunta = parseInt(prompt("Cuantas veces quieres jugar?"))
let contador = 0;

while(pregunta>contador){
    if(true){
        contador++;
    }


    opcionUsuario = prompt("Para jugar Cachipun contra la computadora, elegir \nPiedra: 0\nPapel: 1\nTijera: 2");


alert("Elegiste " + opciones[opcionUsuario]);
alert("La computadora eligió " + opciones[opcionMaquina]);

if(opcionUsuario == piedra){

    if(opcionMaquina == piedra){

        alert("Empate!");
    }
    else if(opcionMaquina == papel){

        alert("Perdiste");
    }
    else if(opcionMaquina == tijera){

        alert("Ganaste Felicidades !");
    }
} else if(opcionUsuario == papel){
    
    if(opcionMaquina == piedra){

        alert("Ganaste Felicidades !");
    }
    else if(opcionMaquina == papel){

        alert("Empate!");
    }
    else if(opcionMaquina == tijera){

        alert("Perdiste!");
    }
}else if(opcionUsuario == tijera){

    if(opcionMaquina == piedra){

        alert("Perdiste!");
    }
    else if(opcionMaquina == papel){

        alert("Ganaste Felicidades !");
    }
    else if(opcionMaquina == tijera){

        alert("Empate!");
    }
} else if(opcionUsuario != papel || opcionUsuario != piedra || opcionUsuario != tijera){

    alert("Error de datos o datos mal ingresados");
}
    
          
    }
    


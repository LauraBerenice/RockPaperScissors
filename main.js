let prompt1 = prompt('Jugador 1, haz tu jugada!');
let prompt2 = prompt('Jugador 2, haz tu jugada!');

let Player1 = prompt1.toLowerCase();
let Player2 = prompt2.toLowerCase();

if (Player1 == Player2) {
    alert("Empate!!");
    console.log (Player1+Player2)
} 

if (Player1== "piedra" && Player2=="papel") {
    alert("Jugador 2 gana!!");
    console.log (Player1+Player2)
} else if(Player1== "piedra" && Player2=="tijera"){
    alert("Jugador 1 gana!!");
    console.log (Player1+Player2)
} 

if (Player1== "papel" && Player2=="tijera") {
    alert("Jugador 2 gana!!");
    console.log (Player1+Player2)
} else if (Player1== "papel" && Player2=="piedra") {
    alert("Jugador 1 gana!!");
    console.log (Player1+Player2)
} 

if (Player1== "tijera" && Player2=="piedra") {
    alert("Jugador 2 gana!!");
    console.log (Player1+Player2)
} else if (Player1== "tijera" && Player2=="papel") {
    alert("Jugador 1 gana!!");
    console.log (Player1+Player2)
} 
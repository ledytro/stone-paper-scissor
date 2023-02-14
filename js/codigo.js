// Declaración de variables
let player = 0;
let pc = 0;
let playerCounter = 0;
let pcCounter = 0;
let tieCounter = 0;

// Comprobación de combate
while (playerCounter < 3 && pcCounter < 3) {
    // Invocación de 'random' con parametro min y max
    pc = random (1, 3); 

    // Instrucciones
    player = prompt("Choose: 1 for stone 👊, 2 for paper 🖐 or 3 for scissor ✌.");

    // Elección de cada jugador invocando 'choose'
    alert("You chose " + choose(player) + ' and The PC chose ' + choose(pc));

    // Comparación de resultados
    if((player == 1 && pc == 3) || (player == 2 && pc == 1) || (player == 3 && pc == 2)){
        alert("You Win!");
        playerCounter ++;
    } else if(pc == player){
        alert("TIE!");
        tieCounter ++;
    } else {
        alert("You lose!");
        pcCounter ++;
    }
}

// Opciones de usuario
function choose(option){
    if(option == 1){
        return "👊";
    } else if(option == 2){
        return "🖐";
    } else if(option == 3){
        return "✌";
    } else{
        return "You chose the wrong option, try again.";
    }
}

// Generar un numero aleatorio entre un minimo y un maximo
function random(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// indicar el ganador de la partida
alert("You win " + playerCounter + " times, the PC win " + pcCounter + " times and the number of ties is " + tieCounter);

// indicar el ganador del encuentro
if (playerCounter > pcCounter) {
    alert("🥳 You are the Winner! 🎉");
}
else {
    alert("🤯 You are the Loser! 📈");
}
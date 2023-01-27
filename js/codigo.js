// Declaración de funciones
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
function random(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Declaración de variables
let player = 0;
let pc = 0;
let playerCounter = 0;
let pcCounter = 0;
let tieCounter = 0;

// Mejor de 3
while (playerCounter < 3 && pcCounter < 3) {
    pc = random (1, 3); // Invocación de función random con parametro min y max

    // Instrucciones
    player = prompt("Choose: 1 for stone 👊, 2 for paper 🖐 or 3 for scissor ✌.");

    // Mensaje de elección
    // En esta parte, invocamos la función "choose" pero sustituimos el parametro "option" con el parametro "player" y "pc"
    alert("You chose " + choose(player) + ' and The PC chose ' + choose(pc));

    // Combate
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

alert("You win " + playerCounter + " times, the PC win " + pcCounter + " times and the number of ties is " + tieCounter);

if (playerCounter > pcCounter) {
    alert("🥳 You are the Winner! 🎉");
}
else {
    alert("🤯 You are the Loser! 📈");
}
var currentPlayer =  document.querySelector(".currentPlayer");

let selected;
let player = "x";


let positions = [

    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],

];

function init() {
    selected = [];


    currentPlayer.innerHTML = `JOGADOR DA VEZ : ${player}`;

    document.querySelectorAll(".game button").forEach((item) => {
        item.innerHTML = "";
        item.addEventListener("click", newMove);  
    });
}
init();

function newMove(e) {
    const index = e.target.getAttribute("data-i");
    e.target.innerHTML = player;
    e.target.removeEventListener("click", newMove);
    selected[index] = player;




    setTimeout(() => {
        check();
    }, [100]);

    player = player === "x"? "o" : "x";
    currentPlayer.innerHTML = `JOGADOR DA VEZ: ${player}`;
}

function check() {
    let playerLastMove = player === "x"? "o" : "x";

    const items = selected
     .map((item, i) => [item, i])
     .filter((item) => item[0] === playerLastMove)
     .map((item) => item[1]);

     for (pos of positions) {
        if (pos.every((item) => items.includes(item))) {
            alert("JOGADOR " + playerLastMove + " VENCEU!");
            init();
            return;
        }
     }

     if (selected.filter((item) => item).length === 9) {
        alert("DEU EMPATE!");
        init();
        return;

     }
}


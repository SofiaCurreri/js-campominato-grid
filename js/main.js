// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// Bonus
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;


/**************************************************************************
*                                                                         *
*                                 ON LOAD                                 *
*                                                                         *
***************************************************************************/
let playButton = document.getElementById("play");
const playLevel = document.getElementById("mySelect");



/**************************************************************************
 *                                                                         *
 *                              EVENT LISTENER                             *
 *                                                                         *
***************************************************************************/
playButton.addEventListener(
    "click",
    function () {
        const gridEl = document.getElementById("grid");
        const chooseLevel = playLevel.value;
        let dimension;

        if (chooseLevel == "l-1") {
            dimension = 100;
        } else if (chooseLevel == "l-2") {
            dimension = 81;
        } else {
            dimension = 49;
        }
        createGrid(gridEl, dimension);
    }
);



/**************************************************************************
*                                                                         *
*                                 FUNCTIONS                               *
*                                                                         *
***************************************************************************/
function createGrid(gridEl, dim) {
    gridEl.innerHTML = "";
    for (let i = 0; i < dim; i++) {
        //per creare e aggiungere le celle
        const square = document.createElement("div");
        square.classList.add("square", "text-white", "fw-bold");
        gridEl.append(square);

        //per aggiungere i numeri alle celle
        const squareNum = i + 1;
        square.append(squareNum);

        //per far cambiare colore alla cella se cliccata
        square.addEventListener(
            "click",
            function () {
                this.classList.toggle("active");
                console.log("Il numero corrispondente alla cella è ", i + 1);
            }
        )
    }
}
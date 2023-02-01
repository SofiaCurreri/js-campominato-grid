// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.




/**************************************************************************
*                                                                         *
*                                 ON LOAD                                 *
*                                                                         *
***************************************************************************/
let playButton = document.getElementById("play");



/**************************************************************************
 *                                                                         *
 *                              EVENT LISTENER                             *
 *                                                                         *
***************************************************************************/
playButton.addEventListener(
    "click",
    function () {
        const gridEl = document.getElementById("grid");
        const dimension = 100;
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
            }
        )
    }
}
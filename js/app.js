
// const gridContainer = document.querySelector('.grid-container');

// // creates the cells 

// for (let i = 1; i <= 64; i++) {
//     console.log(i);
//     const cell = document.createElement("div");
//     cell.classList.add("cell");
//     cell.innerText = i;

//     // add the backgound with a class when we click on a cell

// cell.addEventListener("click", function(event) {
//     const clicked = event.target;
//     const classi = clicked.classList;
//     classi.add("colorato");
//     console.log(clicked.innerText);
//     });


//     gridContainer.appendChild(cell);


    

// }



// // create some random numbers (bombs)

// function randomNumbers() {

//     const bombs = [];

//     do {
//         const randomNumber = Math.floor(Math.random() * 64) + 1;
        
//         if (!bombs.includes(randomNumber)) {
//             bombs.push(randomNumber);
//         console.log(`il numero random è: ${randomNumber}`);

//         }
//     } while (bombs.length < 16);

//     console.log(bombs);

//     }

//         console.log(randomNumbers());



// ---------------correzione---------------------------



// genera un array con X numeri random unici
function generateBombsList(maxNumber) {
    const bombsList = [];
    do {
        const randomNumber = Math.floor(Math.random() * maxNumber) + 1;
        if (!bombsList.includes(randomNumber)) {
            bombsList.push(randomNumber);
        }
    }
    while (bombsList.length < 16);

    return bombsList;
}

// genera una griglia con le eventuali bombe
function generateGrid() {
    // numero totale di celle da creare
    const totCells = 8 * 8;

    // lista con le bombe, ad ogni bomba corrisponde un numero
    const bombsList = generateBombsList(totCells);

    console.log(bombsList);

    // stampa in html la griglia
    renderGrid(totCells, bombsList);
}

// stampa in html la griglia di 8x8
function renderGrid(totCells, bombsList) {
    const gridContainer = document.querySelector(".grid-container");
    // ciclo che crea il numero di celle richiesto
    for (let i = 1; i <= totCells; i++) {
        // devo creare una singola cella html
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.textContent = i;

        // creerà un attributo data-index che conterrà il numero della cella
        cell.dataset.indice = i;

        // aggiungo tutti gli eventi necessari nella mia cella
        addCellsEventListeners(cell, bombsList);

        // aggiungo la cella alla griglia
        gridContainer.append(cell);
    }
}

// data una cella ne aggiunge tutti gli eventi
function addCellsEventListeners(cell, bombsList) {
    // aggiungo l'eventListener al click sulla cella
    cell.addEventListener("click", function () {
        const cellIndex = +this.dataset.indice;

        // controllo se il numero della cella cliccata fa parte della lista delle bombe
        if (bombsList.includes(cellIndex)) {
        cell.classList.add("bomb");
        } else {
        cell.classList.add("save");
        }

        // il + davanti a una variebile o valore lo converte in un numero
        console.log('cliccato cella n: ' + cellIndex);
    });
}

generateGrid();
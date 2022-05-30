
const gridContainer = document.querySelector('.grid-container');

// creates the cells 

for (let i = 1; i <= 64; i++) {
    console.log(i);
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.innerText = i;

    // add the backgound with a class when we click on a cell

cell.addEventListener("click", function(event) {
    const clicked = event.target;
    const classi = clicked.classList;
    classi.add("colorato");
    console.log(clicked.innerText);
    });


    gridContainer.appendChild(cell);


    

}



// create some random numbers (bombs)

function randomNumbers() {

    const bombs = [];

    do {
        const randomNumber = Math.floor(Math.random() * 64) + 1;
        
        if (!bombs.includes(randomNumber)) {
            bombs.push(randomNumber);
        console.log(`il numero random è: ${randomNumber}`);

        }
    } while (bombs.length < 16);
    
    console.log(bombs);

    }

        console.log(randomNumbers());
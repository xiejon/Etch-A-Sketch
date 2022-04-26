// create 16 blank divs in html
const container = document.querySelector(".container")
const resetButton = document.querySelector("#reset");

// default 16x16 grid

for (let i = 0; i < (16 * 16); i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.addEventListener("mouseover", function(e) {
        e.target.style.backgroundColor = 'black';
    });
        
    container.appendChild(box);

    clearGridButton(box);
}


// new grid according to user input
const newGrid = document.querySelector("#grid");
let elementNum = container.childElementCount;

function clearGridButton(box) {
    resetButton.addEventListener("click", function() {
        box.style.backgroundColor = '';
    });
}

function deleteGrid(num) {
    for (let i = 0; i < num; i++) {
        const box = document.querySelector(".box");
        box.remove();
    }
}

newGrid.addEventListener("click", function() {
    let boxNum = prompt("Number of rows?");

    if (boxNum < 1 || boxNum > 100) {
        alert("Please enter a number between 1 and 100.")
        return;
    } else {
        deleteGrid(elementNum); 

        for (let i = 0; i < (boxNum * boxNum); i++) {
            const box = document.createElement("div");
            box.classList.add("box");
            box.addEventListener("mouseover", function(e) {
                e.target.style.backgroundColor = 'black';
            });
            container.appendChild(box);
        
            clearGridButton(box);

        }
        container.style.gridTemplateColumns = `repeat(${boxNum}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${boxNum}, 1fr)`;

        elementNum = boxNum * boxNum;
    } 
});


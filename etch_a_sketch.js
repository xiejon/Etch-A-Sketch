const container = document.querySelector(".container")
const resetButton = document.querySelector("#reset");

function randomRGB() {
    const randomBetween = (min, max) => Math.floor(Math.random() * (max - min + 1));
    return randomBetween(0, 255);
}

// default 16x16 grid
for (let i = 0; i < (16 * 16); i++) {
    const box = document.createElement("div");
    box.classList.add("box");

    const r = randomRGB();
    const g = randomRGB();
    const b = randomRGB();
    let shadeFactor = 1;

    box.addEventListener("mouseover", function(e) {
        e.target.style.backgroundColor = `rgb(${r * shadeFactor}, ${g * shadeFactor}, ${b * shadeFactor})`;
        shadeFactor = shadeFactor - 0.1;
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

            // rainbow trail and darken by 10% each mouseover
            let r = randomRGB();
            let g = randomRGB();
            let b = randomRGB(); 
            let shadeFactor = 1;

            box.addEventListener("mouseover", function(e) {
                e.target.style.backgroundColor = `rgb(${r * shadeFactor}, ${g * shadeFactor}, ${b * shadeFactor})`;
                shadeFactor = shadeFactor - 0.1;
            });
   
            container.appendChild(box);
            clearGridButton(box);

        }
        container.style.gridTemplateColumns = `repeat(${boxNum}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${boxNum}, 1fr)`;

        elementNum = boxNum * boxNum;
    } 
});


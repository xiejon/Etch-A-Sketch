// create 16 blank divs in html
const container = document.querySelector(".container")

for (let i = 0; i < (16 * 16); i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.addEventListener("mouseover", function(e) {
        e.target.style.backgroundColor = 'black';
    });
  
    container.appendChild(box);

    const resetButton = document.querySelector("#reset");
    resetButton.addEventListener("click", function() {
        box.style.backgroundColor = '';
    });
}

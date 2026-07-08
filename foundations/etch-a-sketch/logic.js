const container = document.querySelector(".container");

function createGrid(size) {
    for (let i = 0; i < size*size; i++)
    {
        const square = document.createElement("div");
        square.classList.add("child");
        square.addEventListener("mouseover", () => {
            square.classList.add("colour");
        })

        square.addEventListener("mouseleave", () => {
            square.classList.remove("colour");
        })

        square.style.flex = `1 1 calc(100%/${size})`
        container.appendChild(square);
    }
}

createGrid(16);
const button = document.querySelector(".button");
button.addEventListener("click", () => {
    let answer = prompt("How many squares for each do you want to update to");

    while (answer > 100 || answer < 1)
    {
        answer = prompt("Please eneter a number between 1 and 100");
    }
    
    // clearing old grid
    container.innerHTML = "";

    // Appending squares into container
    createGrid(answer);
})

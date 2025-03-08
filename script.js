const container = document.querySelector(".container");

function generateDivs(amount) {
    amount = Number(amount);

    if (amount >= 100) {
        console.log('too many divs!'); 
        return;
    }

    // Removes all children nodes.
    container.innerHTML = "";

    for (let i = 0; i < (amount**2); i++) {
        let box = document.createElement("div");
        box.setAttribute("style", "width: 25px; height: 25px; background-color: grey; margin: 2px;")
        container.appendChild(box);
    }

}


const button = document.querySelector("button");
button.addEventListener("click", function() {
    let divAmt = prompt("How many divs?");
    generateDivs(divAmt);
})

container.addEventListener("mouseover", function(event) {
    if (event.target === container) { return; }

    event.target.style.backgroundColor = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}`
})
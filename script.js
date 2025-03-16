const container = document.querySelector(".box-container");
const selector = document.querySelector("#size-selector");
const totalSize = 450;

function calcSize(amount) {
    return [totalSize/amount, totalSize/amount];
}


function drawBoxes(amount) {
    const dimensions = calcSize(amount);

    //Clear any previous divs.
    container.innerHTML = "";

    for (let i = 0; i < (amount**2); i++) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.setAttribute("style", `width: ${dimensions[0]}px; height: ${dimensions[1]}px;`)

        container.appendChild(box);
    }
}

//Initial
drawBoxes(8);

selector.addEventListener("change", (event) => {
    drawBoxes(event.target.value);
})


container.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "black";
})
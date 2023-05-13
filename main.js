const clickName = document.querySelector(".name-click");
const startGame = document.querySelector(".start");
const inputName = document.querySelector(".name-input");
const submit = document.querySelector(".submit");
const counter = document.querySelector(".counter");

let count = 0;

clickName.addEventListener("click",() => {
    inputName.classList.remove("hide");
    submit.classList.remove("hide");
    startGame.classList.add("hide");
    clickName.classList.add("hide");
    counter.classList.add("hide");
})

submit.addEventListener("click", () => {
    startGame.classList.remove("hide");
    inputName.classList.add("hide");
    submit.classList.add("hide");
})

startGame.addEventListener("click",() => {
    startGame.textContent = "Click Me";
    counter.classList.remove("hide");
})

function increaseCounter (){
    count++;
    counter.innerHTML = count;
}
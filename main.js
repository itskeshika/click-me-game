const clickName = document.querySelector(".name-click");
const startGame = document.querySelector(".start");
const inputName = document.querySelector(".name-input");
const submit = document.querySelector(".submit");

clickName.addEventListener("click",() => {
    inputName.classList.remove("hide");
    submit.classList.remove("hide");
    startGame.classList.add("hide");
    clickName.classList.add("hide");
})
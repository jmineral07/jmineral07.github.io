const detailBtns = document.querySelectorAll(".box")
const popUp = document.querySelectorAll(".popup")
const closeBtns = document.querySelectorAll(".exit-btn")
clickEffect();

function clickEffect() {
    for(let i = 0; i < detailBtns.length; i++) {
        detailBtns[i].addEventListener("click", () => {
            popUp[i].classList.add("on")
        })
    }
    for(let i = 0; i < closeBtns.length; i++) {
        closeBtns[i].addEventListener("click", () => {
            popUp[i].classList.remove("on")
        })
    }
}
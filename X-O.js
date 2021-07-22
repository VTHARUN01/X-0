let array = ["#btn1", "#btn2", "#btn3", "#btn4", "#btn5", "#btn6", "#btn7", "#btn8", "#btn9"]
let arrayNo = []
let h1 = document.querySelector('h1')
let reset = document.querySelector('#reset')
let body = document.querySelector('body')
let isGameOver = 0
function clic(str) {
    let btX = document.querySelector(str)
    btX.innerText = "X"
    arrayNo[parseInt(str.slice(4)) - 1] = 1
    array.splice(array.indexOf(str), 1)
    winOrLose()
    if (isGameOver < 4) {
        let rand = random();
        let btO = document.querySelector(array[rand])
        btO.innerText = 'O'
        arrayNo[parseInt(array[rand].slice(4)) - 1] = 0
        array.splice(rand, 1)
        isGameOver++
        winOrLose()
    }
}

reset.addEventListener('click', () => {
    for (let i = 0; i < 9; i++) {
        let bt = document.querySelectorAll('button')
        bt[i].innerHTML = ''
        bt[i].classList.remove('bg-danger')
        bt[i].disabled = false
    }

    arrayNo = []
    h1.innerText = 'TIC-TAC-TOE'
    isGameOver = 0
    array = ["#btn1", "#btn2", "#btn3", "#btn4", "#btn5", "#btn6", "#btn7", "#btn8", "#btn9"]
})
const random = () => {
    return Math.floor(Math.random() * array.length)
}
function winOrLose() {
    if (arrayNo[0] == arrayNo[1] && arrayNo[1] == arrayNo[2]) {

        colorChange(0, 1, 2)
    }
    if (arrayNo[0] == arrayNo[3] && arrayNo[3] == arrayNo[6]) {

        colorChange(0, 3, 6)
    }
    if (arrayNo[3] == arrayNo[4] && arrayNo[4] == arrayNo[5]) {

        colorChange(3, 4, 5)
    }
    if (arrayNo[6] == arrayNo[7] && arrayNo[8] == arrayNo[7]) {

        colorChange(6, 7, 8)
    }
    if (arrayNo[1] == arrayNo[4] && arrayNo[4] == arrayNo[7]) {

        colorChange(1, 4, 7)
    }
    if (arrayNo[2] == arrayNo[5] && arrayNo[5] == arrayNo[8]) {

        colorChange(2, 5, 8)
    }
    if (arrayNo[0] == arrayNo[4] && arrayNo[4] == arrayNo[8]) {

        colorChange(0, 4, 8)
    }
    if (arrayNo[6] == arrayNo[4] && arrayNo[4] == arrayNo[2]) {

        colorChange(2, 4, 6)
    }
}
function colorChange(x, y, z) {
    if (arrayNo[x] === 1) {
        h1.innerText = 'YOU WON'
        isGameOver = 4
        let button = document.querySelectorAll('button')
        button[x].classList.add('bg-danger')
        button[y].classList.add('bg-danger')
        button[z].classList.add('bg-danger')
        for (let i = 0; i < 9; i++) {
            let bt = document.querySelectorAll('button')
            bt[i].disabled = true
        }

    }
    else if (arrayNo[x] === 0) {
        h1.innerText = 'TRY AGAIN'
        isGameOver = 4
        let button = document.querySelectorAll('button')
        button[x].classList.add('bg-danger')
        button[y].classList.add('bg-danger')
        button[z].classList.add('bg-danger')
        for (let i = 0; i < 9; i++) {
            let bt = document.querySelectorAll('button')
            bt[i].disabled = true
        }
    }

}

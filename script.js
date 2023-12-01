const colors = {
    0: "#00cec9",
    1: "#0984e3",
    2: "#FC427B",
    3: "#3dc1d3"
}
let bubbles = ""
let timer = 60
let score = 0
let hit = 0

const setBubble = () => {
    bubbles = ''
    for (let i = 0; i < 132; i++) {
        bubbles += `<div class="bubble" style="--bubble-color: ${colors[Math.floor(Math.random() * 4)]}">${Math.floor(Math.random() * 10)}</div>`
    }
    document.querySelector("#gameContainer #panel #panelGameArea").innerHTML = bubbles
}

const setTimer = () => {
    const timerInterval = setInterval(() => {
        if (timer > 0) {
            document.querySelector("#timer").innerHTML = --timer
        } else {
            clearInterval(timerInterval)
            document.querySelector('#gameContainer #panel #panelGameArea').innerHTML = `<h1 id="gameOver">Game Over</h1>`
        }
    }, 1000)
}

const setHit = () => {
    hit = Math.floor(Math.random() * 10)
    document.querySelector("#hit").innerHTML = hit
}

const incriseScore = ()=>{
    score += 10
    document.querySelector("#score").innerText = score
}

setTimer()
setBubble()
setHit()

document.querySelector("#gameContainer #panel #panelGameArea").addEventListener("click", (e) => {
    const hitNumber = Number(e.target.innerText)
    if (hit === hitNumber) {
        console.log("matched");
        incriseScore()
        setBubble()
        setHit()
    }
})
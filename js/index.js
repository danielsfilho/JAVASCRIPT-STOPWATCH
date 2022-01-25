const addSeconds = document.querySelector("#seconds")
const addTens = document.querySelector("#tens")
const btnStart = document.querySelector("#start")
const btnStop = document.querySelector("#stop")
const btnReset = document.querySelector("#reset")

var tens = 00
var seconds = 00
var Interval


btnStart.onclick = function() {

    clearInterval(Interval)
    Interval = setInterval(startTimer, 10)
}

btnStop.onclick = function() {
    clearInterval(Interval)
}

btnReset.onclick = function() {
    clearInterval(Interval)
    tens = "00"
    seconds = "00"
    addTens.innerHTML = tens
    addSeconds.innerHTML = seconds
}

function startTimer() {
    tens++

    if(tens <= 9) {
        addTens.innerHTML = "0" + tens
    }

    if(tens > 9) {
        addTens.innerHTML = tens
    }

    if(tens > 99) {
        console.log('seconds    ')
        seconds++
        addSeconds.innerHTML = "0" + seconds
        tens = 00
        addTens.innerHTML = "0" + 0
    }
    
    if(seconds > 9) {
        addSeconds.innerHTML = seconds
    }


}

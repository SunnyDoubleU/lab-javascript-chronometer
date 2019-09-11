var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var splits      = document.getElementById('splits');


function printTime() {
    printMinutes()
    printSeconds()
}

function printMinutes() {
    function minuteMark() {
        minDec.innerHTML = `${chronometer.twoDigitsNumber(chronometer.getMinutes())[0]}`
        minUni.innerHTML = `${chronometer.twoDigitsNumber(chronometer.getMinutes())[1]}`
    }
 setInterval(minuteMark, 1000)
}

function printSeconds() {
    function secondMark() {
        secDec.innerHTML = `${chronometer.twoDigitsNumber(chronometer.getSeconds())[0]}`
        secUni.innerHTML = `${chronometer.twoDigitsNumber(chronometer.getSeconds())[1]}`
    }
setInterval(secondMark, 1000)
}


function printMilliseconds() {
}

function printSplit() {
    let splitList = document.createElement("li")
    splitList.innerHTML = `${chronometer.splitClick()}`

    splits.appendChild(splitList)
}

function clearSplits() {
   splits.innerHTML = ""
}

function setStopBtn() {
    // as soon as click start, reset the set split btn 
btnLeft.innerHTML = "STOP"
btnLeft.classList.remove("start")
btnLeft.classList.add("stop")

}

function setSplitBtn() {
btnRight.innerHTML = "SPLIT"
btnRight.classList.remove("reset")
btnRight.classList.add("split")
}

function setStartBtn() {
btnLeft.innerHTML = "START"
btnLeft.classList.remove("stop")
btnLeft.classList.add("start")

}

function setResetBtn() {
btnRight.innerHTML = "RESET"
btnRight.classList.remove("split")
btnRight.classList.add("reset")
}


// Start/Stop Button
btnLeft.addEventListener('click', function () {

if (btnLeft.innerHTML ==="START") {
setStopBtn()
setSplitBtn()
chronometer.startClick()
printTime()
}
else {
setStartBtn()
setResetBtn()
chronometer.stopClick()
}

});

// Reset/Split Button
btnRight.addEventListener('click', function () {

if (btnRight.innerHTML === "RESET"){
setSplitBtn()
clearSplits()
chronometer.resetClick()
setStartBtn()
setResetBtn()

}
else {
// setResetBtn()
// setStartBtn()
printSplit()
}
});


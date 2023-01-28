const start = document.getElementById('start');
const stop = document.getElementById('stop');
const clic = document.getElementById('clic');
let T;

function getGreen() {clic.style.background = "green"}
function getBlack() {clic.style.background = "var(--app-black)"}
function tap() {getGreen(); setTimeout(getBlack, 200)}

function startTempo() {
    const bpm = document.getElementById('bpm').value;
    let interval = 60000/bpm;
    T = setInterval(tap, interval);
}

function stopTempo() {
    clearInterval(T);
    T = null;
}

start.addEventListener("click", startTempo);
stop.addEventListener("click", stopTempo);

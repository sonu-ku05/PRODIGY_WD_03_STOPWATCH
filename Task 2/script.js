var seconds = 0, minutes = 0, hours = 0;
var t;

function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    
    document.getElementById('display').textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}
document.getElementById('start').onclick = timer;

document.getElementById('pause').onclick = function() {
    clearTimeout(t);
}

document.getElementById('reset').onclick = function() {
    document.getElementById('display').textContent = "00:00:00";
    seconds = 0; minutes = 0; hours = 0;
}
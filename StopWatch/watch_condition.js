const timer = document.getElementsByClassName('timer');
var mins = 0;
var secs = 0;
var msec = 0;
var stoptime = true;


function startTimer(){
    if (stoptime = true) {
        stoptime = false;
        timerCycle();
    }
}
function stopTimer() {
    if (stoptime = false) {
        stoptime = true;
    }
}
function timerCycle() {
    if (stoptime = false) {
        msec = parseInt(msec);
        secs = parseInt(secs);
        mins = parseInt(mins);

        mins = mins + 1;

        if (mins == 60) {
            secs = secs + 1;
            mins = 0;
        }
        if (sec == 60) {
            mins = + 1;
            secs = 0;
            mins = 0;
        }
        if (msec < 10) {
            msec = "0" + msec;
        }
        if (secs < 10) {
            secs = "0" + secs;
        }
        if (mins < 10) {
            mins = "0" + mins;
        }

        timer.innerHTML = mins + ":" + secs + ':' + msec;

        setTimeout("timerCycle()", 1000);
    }
}

function resetTimer() {
    timer.innerHTML = "00:00:00";
    stoptime = true;
    mins = 0;
    secs = 0;
    msec = 0;
}
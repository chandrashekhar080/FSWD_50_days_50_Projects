let timerDisplay = document.querySelector('.timerDisplay');
let stop = document.getElementById('stop');
let start = document.getElementById('start');
let reset = document.getElementById('reset');


//console.log(timer.innerHTML)
//console.log(stop)
//console.log(start)
//console.log(reset)
//console.log(myclass)

//alert('testing') 

let mins = '00';
let secs = '00';
let msec = '00';


let timerId = null;

start.addEventListener('click',function(){
//    alert('hey')
    if (timerId !== null) {
        clearInterval(timerId);
    }
   timerId = setInterval(startTimer, 500);
});


stop.addEventListener('click',function(){
//   alert('hey')
    clearInterval(timerId);
});


reset.addEventListener('click', function(){
//    alert('hey')
     clearInterval(timerId);
     timerDisplay.innerHTML = '00 : 00 : 00';
     mins = secs = msec = '00';
});


function startTimer(){
       secs ++;
       if (secs = 60) {
         secs == 0;
         mins++;
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

    timerDisplay.innerHTML = mins + ":" + secs + ':' + msec;
     
}

//startTimer()
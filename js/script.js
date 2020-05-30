//Variable values

let seconds = 0;
let minutes = 0;
let hours = 0;

let addSeconds = 0;
let addMinutes = 0;
let addHours = 0;

let interval = null;

let status = "true";

//Logic to determine when clock starts-stops

function timer() {
    seconds++

    if(seconds / 60 === 1) {
        seconds = 0;
        minutes++;
        
        if(minutes / 60 === 1) {
            minutes = 0;
            hours++;
    }
}
 
    if(seconds < 10) {
        addSeconds = "0" + seconds.toString();
    } else {
        addSeconds = seconds;
    }

    if(minutes < 10) {
        addMinutes = "0" + minutes.toString();
    } else {
        addMinutes = minutes;
    }

    if(hours < 10) {
        addHours = "0" + hours.toString();
    } else {
        addHours = hours;
    }

    document.getElementById('display').innerHTML = addHours + ":" + addMinutes + ":" + addSeconds;
}



//Logic to start/stop timer

function startStop() {
    if(status === "true") {
        interval = window.setInterval(timer, 1000)
        document.getElementById('start-stop').innerHTML = "Stop";
        status = "false";
    } else {
        window.clearInterval(interval);
        document.getElementById('start-stop').innerHTML = "Start";
        status = "true";
    }
}

function reset() {

    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById('display').innerHTML = "00:00:00";
    document.getElementById('startStop').innerHTML = "Start";
}
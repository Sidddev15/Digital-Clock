//referencing time id to put time in the div
const time = document.querySelector('#time span');

//setting time interval and localTime to the reference
setInterval (() => {
    time.innerText = new Date().toLocaleTimeString();
}, 1000);

function clock() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if (hours < 10) {
        hours = "0" + hours;
    } else if (minutes < 10) {
        minutes = "0" + minutes;
    } else if (seconds < 10) {
        seconds = "0" + seconds;
    }
    let str = hours + ":" + minutes + ":" + seconds;
    document.getElementById("clock").innerHTML = str;
}
const start = setInterval(clock, 1000);




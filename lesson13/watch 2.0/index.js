const hour = document.querySelector('#hr');
const min = document.querySelector('#mn');
const sec = document.querySelector('#sc');


setInterval(() => {
    
    let deg = 6;
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hour.style.transform = `rotsteZ(${(hh) + (mm / 12)}) deg`;
    min.style.transform = `rotsteZ(${(mm)}) deg`;
    sec.style.transform = `rotsteZ(${(ss)}) deg`;

}, 1000)


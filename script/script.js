const clock = {
    s: document.querySelector('.s'),
    m: document.querySelector('.m'),
    h: document.querySelector('.h'),
    hours: document.querySelector('.hours'),
    minutes: document.querySelector('.minutes'),
    tabsItem: document.querySelectorAll('.tabsItem'),
    tabsContentItem: document.querySelectorAll('.tabsContentItem'),
 
}


function start() {

    const date = new Date()
    let secDeg = date.getSeconds() * 6
    let minDeg = date.getMinutes() * 6
    let hourDeg = date.getHours() * 30

    clock.s.style = `transform: rotate(${secDeg}deg); transition: 1s linear`
    clock.m.style = `transform: rotate(${minDeg}deg); transition: 1s linear`
    clock.h.style = `transform: rotate(${hourDeg}deg);transition: 1s linear`

    clock.hours.innerHTML = date.getHours() > 9 ? date.getHours() : '0' + date.getHours()
    clock.minutes.innerHTML = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.minutes()

    setTimeout(() => {
        start()
    }, 1000);
}

start()

for (let i = 0; i < clock.tabsItem.length; i++) {
    const el = clock.tabsItem[i]
    el.addEventListener('click', (e) => {
        for (let j = 0; j < clock.tabsItem.length; j++) {
            const elem = clock.tabsItem[j]
            elem.classList.remove('active')
            clock.tabsContentItem[j].classList.remove('active')
        }
        el.classList.add('active')
        clock.tabsContentItem[i].classList.add('active')
    })
}
// secondomer====start====\\\
// var sechour = 0
var secmin= 0
var sec = 0
var secmil = 0
var interval;


// var HourHeading = document.getElementById('stopwatch__hours');
var minHeading = document.getElementById('stopwatch__minutes');
var secHeading = document.getElementById('stopwatch__seconds');
var MilsHeading = document.getElementById('stopwatch__milseconds');


function timer(){
    secmil++
    MilsHeading.innerHTML = secmil;
    if (secmil >= 100) {
        sec++;
        secHeading.innerHTML = sec;
        secmil = 0;
    }else if (sec >= 60) {
        secmin ++;
        minHeading.innerHTML = secmin;
        sec = 0;
    }
}
function startbtn(){
    interval = setInterval(timer, 10)
    document.getElementById('stopwatch__btn').
    disabled = true
}
function stop(){
    clearInterval(interval)
    document.getElementById('stopwatch__btn').
    disabled = false
}
function reset(){
    // sechour = 0;
	secmin= 0;
    sec = 0;
    secmil = 0;
    // HourHeading.innerHTML =0
	minHeading.innerHTML = 0;
	secHeading.innerHTML = 0;
	MilsHeading.innerHTML = 0;
	stop();
	document.getElementById("stopwatch__btn").disabled = false

}

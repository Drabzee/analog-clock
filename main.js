const secondHandDom = document.querySelector('.clock .second');
const minuteHandDom = document.querySelector('.clock .minute');
const hourHandDom = document.querySelector('.clock .hour');
const digitalDom = document.querySelector('.clock .digital');

const tickAudio = new Audio('./tick.mp3');

const zeroPad = (num) => ('0' + num).slice(-2);
let prevSec = null;
let seconds = null;

const renderClock = () => {
    const date = new Date();
    prevSec = seconds;
    seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours24 = date.getHours();
    const hours12 = hours24 % 12 || 12;
    const meridiem = hours24 >= 12 ? 'PM' : 'AM';
    secondHandDom.style.rotate = (seconds * 6) + 'deg';
    minuteHandDom.style.rotate = ((minutes * 60 + seconds) * 0.1) + 'deg';
    hourHandDom.style.rotate = ((hours12 * 3600 + minutes * 60 + seconds) / 120) + 'deg';
    digitalDom.innerText = `${zeroPad(hours12)}:${zeroPad(minutes)}:${zeroPad(seconds)} ${meridiem}`;

    if(prevSec != seconds) {
        tickAudio.play();
    }

    requestAnimationFrame(renderClock);
}

requestAnimationFrame(renderClock);
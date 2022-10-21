const secondHandDom = document.querySelector('.clock .second');
const minuteHandDom = document.querySelector('.clock .minute');
const hourHandDom = document.querySelector('.clock .hour');
const digitalDom = document.querySelector('.clock .digital');

const zeroPad = (num) => ('0' + num).slice(-2);

const renderClock = () => {
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours24 = date.getHours();
    const hours12 = hours24 % 12 || 12;
    const meridiem = hours24 >= 12 ? 'PM' : 'AM';
    secondHandDom.style.rotate = (seconds * 6) + 'deg';
    minuteHandDom.style.rotate = ((minutes * 60 + seconds) * 0.1) + 'deg';
    hourHandDom.style.rotate = ((hours12 * 3600 + minutes * 60 + seconds) / 120) + 'deg';
    digitalDom.innerText = `${zeroPad(hours12)}:${zeroPad(minutes)}:${zeroPad(seconds)} ${meridiem}`;
    requestAnimationFrame(renderClock);
}

requestAnimationFrame(renderClock);
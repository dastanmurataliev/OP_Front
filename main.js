const menu = document.getElementById('menu');        
const scrollTop = 500;        
window.addEventListener('scroll', function (event) {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > scrollTop) {
        menu.classList.add('menu_fixed');
        menu.style.top = Math.min(-scrollTop + scrolled - 150, 0) + 'px';
    } else {
        menu.classList.remove('menu_fixed');
        menu.style.top = 0 + 'px';
    }
});
// muzic
const pilotsBtn = document.querySelector('.pilotsBtn')
const pilots = document.getElementById('pilots')
const siaBtn = document.querySelector('.sia')
const sia = document.getElementById('sia')
const eminemBtn = document.querySelector('.buttonEminem')
const bird = document.getElementById('bird')
let a = 1
let b = 1
let c = 1
pilotsBtn.onclick = (e) =>
{
    e.preventDefault()
    a++
    if (a % 2 === 0) pilots.play()
    else pilots.pause()
    sia.pause()
    bird.pause()
    b = 1
    c = 1
}
siaBtn.onclick = (e) =>
{
    e.preventDefault()
    b++
    if (b % 2 === 0) sia.play()
    else sia.pause()
    pilots.pause()
    bird.pause()
    a = 1
    c = 1
}
eminemBtn.onclick = (e) =>
{
    e.preventDefault()
    c++
    if (c % 2 === 0) bird.play()
    else bird.pause()
    pilots.pause()
    sia.pause()
    a = 1
    b = 1
}
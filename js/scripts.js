console.log('Im connected')
const rightNow = new Date()
console.log(rightNow.getFullYear())

document.querySelector('#year').textContent = rightNow.getFullYear();

const btn = document.querySelector('#hamburgerBtn')
const nav = document.querySelector('#primaryNav')
function toggleMenu(){
    nav.classList.toggle('open')
}

btn.onclick = toggleMenu
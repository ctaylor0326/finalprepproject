

const el = document.getElementById('peony');

el.addEventListener('mouseover', function handleMouseOver() {
    console.log('moused over')
    el.style.visibility = 'visible';
})


const el = document.getElementById('peony');
const peonyInfo = document.getElementById('peonyInfo')
el.addEventListener('mouseover', function handleMouseOver() {
    console.log('moused over')
    peonyInfo.style.visibility = 'visible';
})
el.addEventListener('mouseout', function handleMouseOut() {
    peonyInfo.style.visibility = 'hidden';
  });
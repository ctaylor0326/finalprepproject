

const el1 = document.getElementById('peony');
const peonyInfo = document.getElementById('peonyInfo')
el1.addEventListener('mouseover', function handleMouseOver() {
    console.log('moused over')
    peonyInfo.style.visibility = 'visible';
})
el1.addEventListener('mouseout', function handleMouseOut() {
    peonyInfo.style.visibility = 'hidden';
  });


  const el2 = document.getElementById('cosmos');
const cosmosInfo = document.getElementById('cosmosInfo')
el2.addEventListener('mouseover', function handleMouseOver() {
    console.log('moused over')
    cosmosInfo.style.visibility = 'visible';
})
el2.addEventListener('mouseout', function handleMouseOut() {
    cosmosInfo.style.visibility = 'hidden';
  });


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

  const el3 = document.getElementById('liatris');
const liatrisInfo = document.getElementById('liatrisInfo')
el3.addEventListener('mouseover', function handleMouseOver() {
    console.log('moused over')
    liatrisInfo.style.visibility = 'visible';
})
el3.addEventListener('mouseout', function handleMouseOut() {
    liatrisInfo.style.visibility = 'hidden';
  });

  const el4 = document.getElementById('alyssum');
  const alyssumInfo = document.getElementById('alyssumInfo')
  el4.addEventListener('mouseover', function handleMouseOver() {
      console.log('moused over')
      alyssumInfo.style.visibility = 'visible';
  })
  el4.addEventListener('mouseout', function handleMouseOut() {
      alyssumInfo.style.visibility = 'hidden';
    });
    

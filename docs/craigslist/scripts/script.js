//mobile menu vars

const btnMobileMore = document.getElementById('btnMobileNavMore');
const menuMobileMore = document.getElementById('mobileNavMore');
const btnCloseMobileMore = document.getElementById('btnMobileNavMoreBack');







//mobile menu fxn

btnMobileMore.addEventListener('click', (event) => {
  menuMobileMore.style.display = 'block';
})

btnCloseMobileMore.addEventListener('click', (event) => {
  menuMobileMore.style.display = 'none';
})



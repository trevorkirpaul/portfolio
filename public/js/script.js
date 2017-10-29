console.log('Hello!');

const menu = document.getElementById('hamburger');
const menuPanel = document.getElementById('mobileMenu');

let bool = false;

menu.addEventListener('click', (event) => {

  //console.log('works');
  

  if (bool === false) {
    menuPanel.style.display = 'flex';
    bool = true;
    event.target.innerText = 'Close';
  } else {
    menuPanel.style.display = 'none';
    bool = false;
    event.target.innerText = 'Menu';
  }

  

});


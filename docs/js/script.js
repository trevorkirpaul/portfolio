console.log('Hello!');
//hambruger menu vars
const menu = document.getElementById('hamburger');
const menuPanel = document.getElementById('mobileMenu');
let bool = false;
//form vars
const inpName = document.getElementById('inpName');
const inpSubject = document.getElementById('inpSubject');
const txtMsg = document.getElementById('txtMessage');
const btnSubmit = document.getElementById('btnSubmit');

const formInputs = [inpName, inpSubject, txtMsg];


//hamburger menu fxn
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

//form fxn

btnSubmit.addEventListener('click', () => {
  //event.preventDefault();
})

formInputs.forEach((item)=>{
  let originalVal = item.value; 
  let $bool = false;
  item.addEventListener('click', () => {
    
    
    if ($bool === false) {
      event.target.value = '';
    }
    $bool = true;
  });

  item.addEventListener('focusout', () => {
    if (event.target.value === '') {
      event.target.value = originalVal;
      $bool = false;
    }
  })
})

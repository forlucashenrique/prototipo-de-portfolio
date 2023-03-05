let header = document.querySelector('header');
let nav = document.querySelector('.header__nav');
let links = nav.getElementsByTagName('li');



for (let i = 0; i < links.length; i++){
  links[i].addEventListener('click', function() {
    
    let current = document.getElementsByClassName('active');

    current[0].className = '';
    this.className += 'active';

  })
}


const activeFixedHeader = () => {
  if (window.scrollY > 0) {
    header.className = 'fixed__header';
  } 
  else {
    header.className = '';
  }

  // console.log(window.scrollY);
  if (window.scrollY >= 505.45 & window.scrollY <= 1000) {

    let current = document.getElementsByClassName('active');
    let a = nav.getElementsByTagName('li')[1]
    current[0].className = ''
    a.className += 'active';
    
    
  } else if (window.scrollY > 1000) {

    let current = document.getElementsByClassName('active');
    let a = nav.getElementsByTagName('li')[2]
    current[0].className = ''
    a.className += 'active';

  } else {
    let current = document.getElementsByClassName('active');
    let a = nav.getElementsByTagName('li')[0]
    current[0].className = ''
    a.className += 'active';
  }
}


window.addEventListener('scroll', activeFixedHeader)
let header = document.querySelector('header');
let nav = document.querySelector('.header__nav');
let links = nav.getElementsByTagName('li');

const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#email');


let isValid = false;

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




const isValidEmail = (email) => {
    const regex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const emailValue = email.value;
    

    if(!regex.test(String(emailValue).toLowerCase())) {
        invalidInput(email);
        isValid = false;
    } else {
        resetInput(email);
        isValid = true;
    }
    
}


const isEmpty = (elem) => {

  if (!elem.value) {
      invalidInput(elem);
      isValid = false;
  } else {
     isValid = true;
  }

}

const resetInput = (elem) => {
  elem.classList.remove('invalid');
  elem.nextElementSibling.classList.remove('error-message');
  elem.nextElementSibling.classList.add('hidden');
}

const invalidInput = (elem) => {
  elem.classList.add('invalid');
  elem.nextElementSibling.classList.add('error-message');
  elem.nextElementSibling.classList.remove('hidden');
}


const validateForm = () => {

  isEmpty(inputName);
  isValidEmail(inputEmail)

  if (isValid) {
      enviarParaWhatsApp();
  }
  
}


function enviarMessage() {
  const spanMessage = document.querySelector('.send-message');

  spanMessage.classList.remove('hidden');

  setTimeout(() => {
    spanMessage.classList.add('hidden');
  }, 2000)
}

function enviarParaWhatsApp() {

  enviarMessage();
  const nome = inputName.value;
  const email = inputEmail.value;

  const mensagem = document.getElementById('input-msg').value;

  const texto = `Nome: ${nome}\nE-mail: ${email}\nMensagem: ${mensagem}`;
  const textoCodificado = encodeURIComponent(texto);
  const numeroWhatsApp = '5581992029667'; // Insira o número de telefone do WhatsApp aqui (apenas números)
  const url = `https://wa.me/${numeroWhatsApp}?text=${textoCodificado}`;

  window.open(url, '_blank');
}

inputName.addEventListener('input', function(){ 
  resetInput(this);
})

inputEmail.addEventListener('input', function() {
  isValidEmail(this);
})


window.addEventListener('scroll', activeFixedHeader); 
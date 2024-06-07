let btnMenu = document.getElementById('btn-menu') 
let menu = document.getElementById('menu-mobile')
let overlay =document.getElementById('overlay-menu')

btnMenu.addEventListener('click',()=>{
    menu.classList.add('abrir-menu')
})
menu.addEventListener('click',()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click',()=>{
    menu.classList.remove('abrir-menu')
})
document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('register-form');
  const alertBox = document.getElementById('register-alert');

  loginForm.addEventListener('submit', function(event) {
      event.preventDefault();

      const username = document.getElementById('new-username').value.trim();
      const password = document.getElementById('new-password').value.trim();

      if (username === '' || password === '') {
          alertBox.textContent = 'Preencha todos os campos.';
          alertBox.style.color = 'red';
          return;
      }

      if (username === 'login' && password === '1234') {
          alertBox.textContent = 'Login bem-sucedido!';
          alertBox.style.color = 'green';
        
      } else {
          alertBox.textContent = 'Usuário ou senha incorretos.';
          alertBox.style.color = 'red';
      }
  });
});

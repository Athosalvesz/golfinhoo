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
    const registerForm = document.getElementById('register-form');
    const alertBox = document.getElementById('register-alert');

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('new-username').value.trim();
        const password = document.getElementById('new-password').value.trim();

        if (username === '' || password === '') {
            alert('Preencha todos os campos.');
            return;
        }

        alert('Cadastrado!');
    });
});

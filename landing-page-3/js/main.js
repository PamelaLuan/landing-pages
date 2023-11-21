let inputEmail = document.getElementById('email');
let button = document.getElementById('button');

button.addEventListener('click', (event )=>{
    event.preventDefault();
    let mensaje = document.querySelector("#mensaje");
    mensaje.style.visibility = 'visible';

    if (validateEmail(inputEmail.value)){
        inputEmail.style.border = '1px solid hsl(243, 87%, 12%)';
        mensaje.innerText = 'valid email';
        mensaje.style.color = 'green';
        inputEmail.value = '';
    }
    else {
        inputEmail.style.border = '1px solid tomato';
        mensaje.style.color = 'tomato'
        mensaje.innerText = 'Please check your email';
    }
});

let inputEmailSign = document.getElementById('emailSign');
let buttonSign = document.getElementById('buttonSign');

buttonSign.addEventListener('click', (event )=>{
    event.preventDefault();

    if (validateEmail(inputEmailSign.value)){
        inputEmailSign.style.border = '1px solid hsl(243, 87%, 12%)';
        errorSign.style.visibility = 'visible';
        errorSign.style.display = 'inline-block';
        errorSign.style.color = 'yellowgreen';
        inputEmailSign.value = '';
        errorSign.innerText = 'valid email';
    }
    else {
        inputEmailSign.style.border = '2px solid tomato';
        errorSign.style.visibility = 'visible';
        errorSign.style.display = 'inline-block';
        errorSign.style.color = 'tomato';
        errorSign.innerText = 'Please check your email';
    }
});


function validateEmail(email){
    let expReg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

    if (expReg.test(email)==true){
        return true;
    }
    else {
        return false;
    }
}


/* MENU RESPONSIVE
*/
const nav = document.getElementsByClassName('navbar')[0];
const navMobile = document.getElementsByClassName('navmobile')[0];
const navMobileIcon = document.getElementById('navmobile-icon');

let open = false;

/* función: abrir/cerrar menu */
const toggleMenu = ()=>{
    nav.classList.toggle('navbar2');
    nav.style.transition = 'transform 0.5s ease-out';
}

/* evento click sobre menu de barras */
navMobile.addEventListener('click', function(){
    toggleMenu();

    if (document.querySelector('.navbar.navbar2')){
        open = true;
    }
    else{
        open = false;
    }
})

/* cerrar al hacer clic en la pantalla */
window.addEventListener('click', function(e){
    if (open){
        if (e.target !== navMobileIcon){
            toggleMenu();
            open = false;
        }
    }
})

/* cerrar al girar la pantalla del dispositivo */
window.addEventListener('resize', function(){
    if (screen.width > 575){
        nav.style.transition = 'none';
        if (open){
            toggleMenu();
            open = false;
        }
    }
})


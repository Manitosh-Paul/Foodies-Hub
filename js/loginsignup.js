// login sign up move 
const move = document.querySelector('#moves');
const login = document.querySelector('#login');
const signup = document.querySelector('#signup');
const loginform = document.querySelector('.log_in');
const signupform = document.querySelector('.sign_up');

signup.addEventListener('click', function () {
    move.style.left = "50%";
    signupform.style.left = "0";
    loginform.style.left = "-100%";
})
login.addEventListener('click', function () {
    move.style.left = "0";
    signupform.style.left = "100%";
    loginform.style.left = "0";
})
// login sign up move

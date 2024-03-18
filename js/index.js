// active link script
features.addEventListener('click', () => {
    features.classList.add('is_active');

    mainpg.classList.remove('is_active');
    get.classList.remove('is_active');
    contact.classList.remove('is_active');
})

get.addEventListener('click', () => {
    get.classList.add('is_active');

    mainpg.classList.remove('is_active');
    features.classList.remove('is_active');
    contact.classList.remove('is_active');
})

contact.addEventListener('click', () => {
    contact.classList.add('is_active');

    mainpg.classList.remove('is_active');
    features.classList.remove('is_active');
    get.classList.remove('is_active');
})
// active link script

// show nav_links and login
const ham = document.querySelector('.hamburger');
const nav_links = document.querySelector('.nav_links');
const btn = document.querySelector('.btn');

// hamburger animation
ham.addEventListener('click', function () {
    this.classList.toggle('active');
})
// hamburger animation

ham.addEventListener('click', () => {
    if (nav_links.style.left != "0%") {

        nav_links.style.left = "0%";
        nav_links.classList.add('filter');

        btn.style.left = "0%";
        btn.classList.add('filter');
    }
    else {
        nav_links.style.left = "-100%";
        btn.style.left = "-100%";
    }
})

// show nav_links and login

// login sign up move 
const move = document.querySelector('#moves');
const login = document.querySelector('#login');
const signup = document.querySelector('#signup');

signup.addEventListener('click', function () {
    move.style.left = "50%";
})
// login sign up move

//phone number verification
const phone = document.querySelector('#phone');
var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
let flag = 0;
function validatephone() {
    if (phone.value.match(phoneno)) {
        flag = 1;
    }
    else {
        alert("Invalid Phone Number");
        flag = 0;;
    }
    if (flag==1) {
        return true;
    }
    else {
        return false;
    }
}
//phone number verification
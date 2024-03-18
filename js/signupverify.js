let email = document.getElementById('email');
let password = document.getElementById('pass');
let confirm = document.getElementById('c_pass');
let e_er = document.getElementById('e_e');
let p_er = document.getElementById('p_e');
let cp_er = document.getElementById('cp_e');
let strong = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
let medium = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')
let flag_email = 0;
let flag_pass = 0;
let flag_conf = 0;

email.addEventListener('input', () => {
    if (email.value == "") {
        email.style.color = 'red'
        email.style.borderBottom = '1px solid red'
        e_er.style.color = 'red'
        e_er.innerHTML = 'Email cannot be empty'
        flag_email = 0;
    }

    else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))) {
        email.style.color = 'red'
        email.style.borderBottom = '1px solid red'
        e_er.style.color = 'red'
        e_er.innerHTML = 'Invalid email'
        flag_email = 0;
    }

    else {
        email.style.color = 'green'
        email.style.borderBottom = '1px solid green'
        e_er.innerHTML = ""
        flag_email = 1;
    }
})

password.addEventListener('input', () => {
    if (password.value == "") {
        password.style.color = 'red'
        password.style.borderBottom = '1px solid red'
        p_er.style.color = 'red'
        p_er.innerHTML = 'Password cannot be empty'
        flag_pass = 0
    }
    else if (confirm.value!="" && confirm.value != password.value) {
        confirm.style.color = 'red'
        confirm.style.borderBottom = '1px solid red'
        confirm_error.style.color = 'red'
        confirm_error.innerHTML = 'Password is not matching'
        flag_conf = 0
    }
    else if(strong.test(password.value)){
        password.style.color = 'green'
        password.style.borderBottom = '1px solid green'
        p_er.style.color = 'green'
        p_er.innerHTML = 'Password Strength: strong'
        flag_pass = 1
    }
    else if(medium.test(password.value)){
        password.style.color = '#D35400'
        password.style.borderBottom = '1px solid #D35400'
        p_er.style.color = '#D35400'
        p_er.innerHTML = 'Password Strength: medium'
        flag_pass = 1
    }
    else{
        password.style.color = 'red'
        password.style.borderBottom = '1px solid red'
        p_er.style.color = 'red'
        p_er.innerHTML = 'Password Strength: weak'
        flag_pass = 1
    }
})

confirm.addEventListener('input', ()=>{
    if (confirm.value == "") {
        confirm.style.color = 'red'
        confirm.style.borderBottom = '1px solid red'
        cp_er.style.color = 'red'
        cp_er.innerHTML = 'This cannot be empty'
        flag_conf = 0
    }
    else if (password.value == "") {
        password.style.color = 'red'
        password.style.borderBottom = '1px solid red'
        p_er.style.color = 'red'
        p_er.innerHTML = 'Fill this field first'
        flag_pass = 0
    }
    else if (confirm.value != password.value) {
        confirm.style.color = 'red'
        confirm.style.borderBottom = '1px solid red'
        cp_er.style.color = 'red'
        cp_er.innerHTML = 'Password is not matching'
        flag_conf = 0
    }
    else {
        confirm.style.color = 'green'
        confirm.style.borderBottom = '1px solid green'
        cp_er.innerHTML = ''
        flag_conf = 1
    }
})

function signupvalidate() {
    if (flag_email == 1 && flag_pass == 1 && flag_conf == 1) {
        return true;
    }
    else {
        return false; 
    }
}
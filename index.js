let btn = document.getElementById('submitBtn');
let username = document.getElementById('username');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let container = document.getElementById('container');
let successAlert = document.getElementById('successAlert');
let dangerAlert = document.getElementById('dangerAlert');

isValidUsername = false;
isValidEmail = false;
isValidPhone = false;

btn.addEventListener('click', submitForm);

function submitForm(e){
    e.preventDefault();
    validUsername();
    validEmail();
    validPhone();
    if(isValidEmail && isValidPhone && isValidUsername){
        dangerAlert.style.display = 'none';
        successAlert.style.display = 'block';
        setTimeout(() => {
            successAlert.style.display = 'none';  
        }, 5000);
    }else{
        dangerAlert.style.display = 'block';
        successAlert.style.display = 'none';
        setTimeout(() => {
            dangerAlert.style.display = 'none';  
        }, 5000);
    }
}

username.addEventListener('blur', validUsername);
email.addEventListener('blur', validEmail);
phone.addEventListener('blur', validPhone);


function validUsername(){
    let regex = /^[a-zA-z]([0-9a-zA-Z]){3,10}$/;
    let str = username.value;

    if(regex.test(str)){
        username.classList.remove('is-invalid');
        isValidUsername = true;
    }
    else{
        username.classList.add('is-invalid');
        isValidUsername = false;
    }
}

function validEmail(){
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;

    if(regex.test(str)){
        email.classList.remove('is-invalid');
        isValidEmail = true;
    }else{
        email.classList.add('is-invalid');
        isValidEmail = false;
    }
}

function validPhone(){
    let regex = /^[0-9]{10}$/;
    let str = phone.value;

    if(regex.test(str)){
        phone.classList.remove('is-invalid');
        isValidPhone = true;
    }else{
        phone.classList.add('is-invalid');
        isValidPhone = false;
    }
}

function main(){
    console.log('hello bro')
}
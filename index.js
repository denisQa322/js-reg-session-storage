const registrationButton = document.querySelector('.registration');
const inputName = document.querySelector('.name');
const inputCity = document.querySelector('.city');
const inputPass = document.querySelector('.password');
const registrationWrapper = document.getElementById('registration-wrapper');
const cleanButton = document.querySelector('.clean');

const checkForReg = sessionStorage.getItem('user.data');

if (checkForReg){
    if(inputName.getItem === ''){
        registrationWrapper.style.display = 'block';
    }
    if(inputCity.getItem === ''){
        registrationWrapper.style.display = 'block';
    }
    if(inputPass.getItem === ''){
        registrationWrapper.style.display = 'block';
    }else{
        alert('You have already registrated.');
        alert('Logging in.');
        alert('You have logged in.');
        registrationWrapper.style.display = 'none';
    }
}

registrationButton.addEventListener('click', () => {
    const data ={
        name: inputName.value,
        city: inputCity.value,
        password: inputPass.value
    }
    if(inputName.value === ''){
        alert('You must type your name') 
    }
    if(inputCity.value === ''){
        alert('You must type your city');
    }
    if(inputPass.value === ''){
        alert('You must set the password');
    }
    sessionStorage.setItem('user.data', JSON.stringify(data));
});

cleanButton.addEventListener('click', () =>{
    sessionStorage.clear();
    location.reload(true);
})
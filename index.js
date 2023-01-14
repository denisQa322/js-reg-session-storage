const registrationButton = document.querySelector('.registration');
const inputName = document.querySelector('.name');
const inputCity = document.querySelector('.city');
const inputPass = document.querySelector('.password');
const registrationWrapper = document.getElementById('registration-wrapper');
const body = document.querySelector('body');

const checkForReg = sessionStorage.getItem('user.data');

if (checkForReg){
    alert('You have already registrated.');
    alert('Logging in.');
    alert('You have logged in.')
    registrationWrapper.style.display = 'none';
}

registrationButton.addEventListener('click', () => {
    const data ={
        name: inputName.value,
        city: inputCity.value,
        password: inputPass.value
    }

    sessionStorage.setItem('user.data', JSON.stringify(data));
});
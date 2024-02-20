const changeSignupInput = document.getElementById('changeSignupInput');
const changeLoginInput = document.getElementById('changeLoginInput');
const loginButtonInput = document.getElementById('login-button-input');
const signupButtonInput = document.getElementById('signup-button-input');

changeSignupInput.addEventListener('click', () => {
    loginButtonInput.style.display = 'none';
    changeSignupInput.style.display = 'none';
    signupButtonInput.style.display = 'block';
    changeLoginInput.style.display = 'block';
});

changeLoginInput.addEventListener('click', () => {
    loginButtonInput.style.display = 'block';
    changeSignupInput.style.display = 'block';
    signupButtonInput.style.display = 'none';
    changeLoginInput.style.display = 'none';
})
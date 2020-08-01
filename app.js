const notifyBTN = document.querySelector('button.notify-btn');
const error = document.querySelector('.error');
const emailInput = document.querySelector('input.email');
const myForm = document.querySelector('form');

notifyBTN.addEventListener('click', validation);
let validError = false;

function validation(e) {

    e.preventDefault();
    error.classList.add('hide');
    emailInput.style.borderColor = '#ddd';
    if (emailInput.value.length == 0) {
        addError(emailInput, 'Required Field');
    } else {
        let exp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        let result = exp.test(emailInput.value);
        if (!result) {
            addError(emailInput, 'Please provide a valid email address');
            validError = true;
        } else {
            validError = false;
            console.log(validError);
        }
    }
    if (!validError) {
        console.log("Submit");
        myForm.submit();
    }

}

function addError(input, mes) {
    let temp = input.nextElementSibling;
    temp.classList.remove('hide');
    temp.textContent = mes;
    input.style.borderColor = 'red';
    input.focus();
}
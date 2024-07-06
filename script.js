const inputField = document.querySelector('#PassWord');

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcsefghijklmnopqrstuvwxyz';
const numbers = '1234567890';
const symbols = '!@#$%&';
const allChars = upperCase + lowerCase + numbers + symbols;


function passwordGive(){
    let password = '';
    let passwordLength = 16;

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while(passwordLength > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    inputField.value = password;
}

function CopyPassword(){
    navigator.clipboard.writeText(inputField.value);
}
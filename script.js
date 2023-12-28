const passwordBox = document.getElementById("password");
const lenght = 20;

const upperCase = "ABCDEFGHIJKLMNOPRSTUVWXYZ";
const lowerCase = "abcdefghijklmnoprstuvwxyz";
const numbers = "0123456789";
const symbols = "!#$%&'()*+,-./:;<=>?@[]^_`|}{~";

const allChars = upperCase + lowerCase + numbers + symbols;

function createPassword(){
    let password = "";
    while(password.length < lenght){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}
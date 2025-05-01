// Random Password Generator

function generatePass(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols) {
    let allowedChars = "";
    let pass = "";

    const lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*(){}[]/*-+?";

    allowedChars += includeLowerCase ? lowerCaseChar : "";
    allowedChars += includeUpperCase ? upperCaseChar : "";
    allowedChars += includeNumbers ? numbers : "";
    allowedChars += includeSymbols ? symbols : "";
    console.log(allowedChars);
    if (length <= 0) {
        return `Password should have length greater than 0`;
    }
    else if (allowedChars.length === 0) {
        return `Password should be allowed with some charcters or numbers or symbols`;
    }
    else {
        for (let i = 0; i <length; i++) {
            const randomIndex = Math.floor(Math.random() * allowedChars.length);
            pass += allowedChars[randomIndex];
        }
        return pass;
    }
}

const length = 12;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePass(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols);

console.log(`Generated Password: ${password}`);
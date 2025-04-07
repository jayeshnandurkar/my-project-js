// // // Destructuring  arrays and objects
// // var a = [1,2,3];

// // var [b,c,d] = a;

// // console.log(b);
// // console.log(c);
// // console.log(a);
// // console.log(d);


// // objects 
// var obj ={name:"jayesh",age:"25"}
// var {age} = obj;


// random OTP Genrator
// function generateOTP(length = 6) {
//     let otp = '';
//     const digits = '0123456789';
//     for (let i = 0; i < length; i++) {
//         otp += digits[Math.floor(Math.random() * digits.length)];
//     }
//     return otp;
// }

// console.log(generateOTP()); // Example: 482913



const crypto = require('crypto');

// Function to generate OTP
function generateOTP(length = 6) {
    return crypto.randomInt(10**(length-1), 10**length).toString();
}   

// Function to validate OTP (simple example)
function validateOTP(userInput, generatedOTP) {
    return userInput === generatedOTP;
}

// Example usage
const otp = generateOTP();
console.log("Generated OTP:", otp);

// Simulate user entering OTP
const userOTP = "123456"; // This should come from user input
console.log("Is OTP valid?", validateOTP(userOTP, otp));
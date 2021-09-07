let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


function login(password) {
    return password;
}

login("fSxA");


function login(password) {
    // Password can be [a-zA-Z]
    return password === "fSxA";
};

function brute(allowedChars, maxLength = 5) {
    do {
        // generate password


        if (password.length > maxLength) {
            return null;
        }
    } while (login(password));

    return password;
};

console.log(brute(arr));




// // const password = "***Fs*";

// const password = "ac";
// const matrix = { 0: 0, 1: 2 }

// function getStringFromMatrix(allowedChars, matrix) {
//     // for (let i = 0; i <= allowedChars.length; i++) {
//     //     console.log(allowedChars[i]);
//     //     for (let k = 0; k <= password.length; k++) {
//     //         console.log('from second cycle:', password[k]);
//     //     }
//     // }

//     // for (let i of allowedChars) {
//     //     console.log('From 1:', i);
//     // };

//     // for (let key in allowedChars) {
//     //     let value = allowedChars[key];
//     //     console.log(key, value)
//     // };

//     allowedChars.forEach((value, key) => {
//         console.log(value, key);
//     });
// }

// getStringFromMatrix(arr, password);





// console.log(arr.length) // 52

// function* getPassword(allowedChars, maxLength, prevChar = '') {
//     for(let i = 0; i < allowedChars.length; i++) {
//         const password = prevChar + allowedChars[i];
//         if(password.length >= maxLength) {
//             return;
//         }

//         yield* getPassword(allowedChars, maxLength, password).next();
//     } 
//   }

//   for (let password of getPassword(arr, 5)) {
//     console.log(password.value); //0123456789
//   }
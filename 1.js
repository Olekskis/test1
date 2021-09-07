let allowedChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let password = "fSxA";

// console.log(allowedChars.length); // 52
// console.log(password.length); // 4

function bruteforce() {
    let crack = [];

    for (let j = 0; j <= password.length - 1; j++) {
        for (let i = 0; i <= allowedChars.length - 1; i++) {
            // console.log(i, allowedChars[i]);
            if (allowedChars[i] === password[j]) {
                crack.push(allowedChars[i]);
                console.log(crack.join(''));
            }
        };

        // console.log('From J:', j, password[j]);
    };
};

bruteforce();
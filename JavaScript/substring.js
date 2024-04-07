let sub = (string, substring) => {
    for (let i = 0; i <= string.length - substring.length; i++) {
        let match = true;
        for (let j = 0; j < substring.length; j++) {
            if (string[i + j] !== substring[j]) {
                match = false;
                break;
            }
        }
        if (match) {
            return i;
        }
    }
    return -1;
}


let str = "Hello, world!";
let substr = "edd";
console.log(sub(str, substr));


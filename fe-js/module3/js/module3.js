const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";

const newArr = alphabet.split("");

console.log(newArr);

console.log(newArr.length);

const firstString = (newArr.slice(0,12));

console.log(firstString);

const secondString = (newArr.slice(12,23));

console.log(secondString);

const thirdString = (newArr.slice(23,33));

console.log(thirdString);

const keyboard = [firstString,secondString,thirdString];

console.log(keyboard);

let hello = (keyboard[1][5] + keyboard[0][2] + keyboard[1][8] + keyboard[1][8] + keyboard[0][8]);

console.log(hello);

let js = (keyboard[1][6] + keyboard[1][0] + keyboard[2][3] + keyboard[1][0] + keyboard[1][1] + keyboard[2][2] + keyboard[0][3] + keyboard[0][7] + keyboard[0][9] + keyboard[0][4]);

console.log(js);

let trainer = (keyboard[0][4] + keyboard[0][3] + keyboard[1][0] + keyboard[0][7] + keyboard[2][5] + keyboard[0][2] + keyboard[0][3]);

console.log(trainer);

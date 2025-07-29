let userName = "Murad Hossen";
console.log(userName.length);
console.log(userName.charAt(0));
console.log(userName.charCodeAt(0));
console.log(userName.codePointAt(0));

console.log(userName[0]);
console.log(userName[userName.length - 1]);
console.log(userName.at(0));
console.log(userName.at(-1));

userName = "  Murad Hossen   ";
console.log(userName.trim());
console.log(userName.trimStart());
console.log(userName.trimEnd());

userName = "Murad";
console.log(userName.toUpperCase())
console.log(userName.toLowerCase())
console.log(userName.padStart(15, "*"))
console.log(userName.padEnd(15, "*"))
console.log(userName.repeat(5));

let firstName = "Murad";
let lastName = "Hossen"
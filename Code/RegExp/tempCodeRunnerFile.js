const safe = RegExp.escape("[*]");
const regex = new RegExp(safe);
const oldText = "[*] is a web school.";
const newText = oldText.match(regex, "W3Schools");
console.log(newText)
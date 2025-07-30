const { useCallback } = require("react");

const user = {
  firstName: "Murad",
  lastName: "Hossen",
  age: 28,
  family: ["Raja", "Rahim"],
};

// shallow copy
const userCopy = { ...user };
userCopy.lastName = "Khan";
userCopy.family.push("Billah");
userCopy.family.push("Helal");

console.log(`Before: ${user}`);
console.log(`After: ${userCopy}`);

// deep copy
const userClone = structuredClone(user);
userClone.lastName = "Khan";
userClone.family.push("Billah");
userClone.family.push("Helal");

console.log(`Before: ${user}`);
console.log(`After: ${userClone}`);

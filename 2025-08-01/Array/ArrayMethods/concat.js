// Classic flatten pattern before .flat() was available
const arrays = [[1, 2], [3, 4], [5, 6]];
const flattened = arrays.reduce((acc, cur) => acc.concat(cur), []);
console.log(flattened); // [1, 2, 3, 4, 5, 6]
